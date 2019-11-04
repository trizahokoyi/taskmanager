const express = require ('express');
require( './db/mongoose');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use((req,res,next) => { //middleware
    res.status(503).send('Site is currently down');
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});