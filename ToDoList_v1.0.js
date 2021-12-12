const Sequelize=require('./DB');
const tasks=require('./TasksModel');
const usertotasks=require('./UserToTasksRelModel');
const tokens=require('./TokensModel');
const express = require('express');
const users = require('./UsersModel');
const Users = require('./UsersModel');
const app = express();

const port=8888;

const dbinit=()=>
{
    try{
        Sequelize.authenticate();
        Sequelize.sync().then((result)=>{console.log(result)});
        console.log('Connection OK');
    }
    catch(e)
    {
        console.log(e);
    }
};
dbinit.call();


app.listen(port);

app.get('/', (req, res)=>
{
    res.send("Current database:"+ Sequelize.getDatabaseName());
});