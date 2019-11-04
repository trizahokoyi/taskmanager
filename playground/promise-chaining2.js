// Goal: use async await
//1. create deleteTaskAndCount as an async function
//-Accept id of task to remove
//2. use await to delete task and count up incomplete  tasks
//3.return the count
//call the function and attach then/catchtolog result
//5.test your work

require('../src/db/mongoose');
const Task = require('../src/models/task');

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
};
    deleteTaskAndCount('5db2f528f8d299280698ee9c').then((count) => {
        console.log(count);
    }).catch((e) => {
        console.log(e);
    });
