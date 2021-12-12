const sequelize=require('./DB');
const DataTypes=require('sequelize');

var UserToTaskRel=sequelize.define('UserToTasksRel',
{
    Id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull:true},
    UserId:{type:DataTypes.INTEGER},
    TaskId:{type:DataTypes.INTEGER}
}
);

module.exports=UserToTaskRel;