const sequelize=require('./DB');
const DataTypes=require('sequelize');
var UserToTasks=require('./UserToTasksRelModel');

var Tasks=sequelize.define('Tasks',
    {
        Id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull:true},
        TaskDesc:{type:DataTypes.STRING, defaultValue:""},
        IsCompleted:{type:DataTypes.BOOLEAN, defaultValue:false}
    }
);

Tasks.hasMany(UserToTasks);

module.exports=Tasks;