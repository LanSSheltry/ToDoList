const sequelize=require('./DB');
const DataTypes=require('sequelize');

var UserToToken=sequelize.define('Tokens',
{
    Id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull:true},
    UserId:{type:DataTypes.INTEGER},
    CurrentToken:{type:DataTypes.STRING}
}
);

module.exports=UserToToken;