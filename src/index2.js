const express = require ('express');
require( './db/mongoose');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
// const bcrypt = require('bcryptjs');

// const myFunction = async () => {
//     const password = 'batman';
//     const hashedPassword = await bcrypt.hash(password, 8);

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch = await bcrypt.compare('batman', hashedPassword);
//     console.log(isMatch);
// };

const jwt = require('jsonwebtoken');
const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123'},'awesome',{expiresIn: '10seconds'});
    console.log(token);

    //const data = jwt.verify(token,'awesome');
    //console.log(data);
}

myFunction();