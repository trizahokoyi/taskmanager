// CRUD create, read, upade, delete
const {MongoClient,ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectionURL, {useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
const db = client.db(databaseName);

// db.collection('users').updateOne({
//     id: new ObjectID("5db2df25d5429a23db4797bf")
// }, {
//     $inc:{
//         age: 3
//     }
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=> {
//     console.log(error);
// });

//     db.collection('users').insertOne({
//        name: 'Cameron',
//        age:  28,
//        city: 'Mombasa',
//        street: 'kwale'
//     });

// //db.collection('users').insertOne({
//     // name: 'Hellen',
//     // age: '21'
// //});


// db.collection('tasks').insertMany([
//     {
//         name: 'Mercy',
//         age: 24
//     }, {
//         name: 'Ruth',
//         age: 30
//     }
// ], (error,result) => {
//         if (error){
//             return console.log('Unable to insert document');
//         }
//         console.log(result.ops);
//     });

//     db.collection('tasks').insertMany([
//         {
//             description: 'Clean the house',
//             complete: true
//         }, {
//             description: 'Renew inspection',
//             complete: false
//         }, {
//             description: 'Port plants',
//             complete: false
//         }
//     ], (error,results) => {
//         if (error) {
//             return console.log('Unable to insert tasks');
//         }
//         console.log(results.ops);
//     });
//     db.collection('tasks').find({ completed: false }).toArray((error,
//         tasks) => {
//             console.log(tasks);
//         });
//  db.collection('tasks').updateMany({
//      complete: false
//  },{
//      $set: {
//         complete: true 
//      }
//  }).then((result) => {
//      console.log(result.modified.Count);
//  }).catch((error) => {
//      console.log(error);
//  });
// });
 
 db.collection('tasks').deleteOne({
     description:'Clean the house'
 }).then((result)=> {
     console.log(result);
 }).catch((error) => {
     console.log(error);
 });
});