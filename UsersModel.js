const sequelize=require('./DB');
const DataTypes=require('sequelize');
const UserToTasks=require('./UserToTasksRelModel');
const UserToToken = require('./TokensModel');

 var Users =sequelize.define( 'Users',
 {
     Id:{type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull:true},
     Login:{type: DataTypes.STRING},
     Password:{type:DataTypes.STRING},
     IsAccountDeleted:{type:DataTypes.BOOLEAN}
 });

 Users.hasMany(UserToTasks);
 Users.hasOne(UserToToken);

module.exports=Users;