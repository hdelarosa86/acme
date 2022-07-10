const { STRING, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../database');

//let the server validate data adn log errors
const Employee = db.define('employee', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
   
    validate: {
      notEmpty: true,
      isEmail: true,
      unique: true,
      
    },
  },
});

module.exports = Employee;