const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING, 
    unique: true, 
  },
  password: {
    type: DataTypes.STRING
  }
});

const List = sequelize.define('list', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING
  },
  items: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  }
});

User.hasMany(List);
List.belongsTo(User);

module.exports = {
  User, List
}
