const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator= require('validator');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique: true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
        }
        }

    },
    age:{
        type:Number,
        default:0,
        validate(value) {
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:7,
        trim:true,
        validate(value){
            if (value.toLowerCase().includes('Password')){
                throw new Error('Password cannot contain Password')
            }
        }
    },
    tokens: [{
    token: {
        type: String,
        required: true
    }
    }]
});

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'theshephsrd');

    user.tokens = user.tokens.concart({token});
    await user.save();

    return token; 
}

userSchema.statics.findByCredentials = async (email,password) =>{
    const user = await User.findOne({email});


const isMatch = await bcrypt.compare(password,user.password);

if (!isMatch) {
    throw new Error('Unable to login');
}

return user;
}

userSchema.pre('save', async function(next){
    const user = this;

    if(user.isModified('password')) {
        user.password= await bcrypt.hash(user.password,8);
    }
    next();
});
const User = mongoose.model('user',userSchema);
module.exports = User;
