const { STRING, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../database');

//need to add more categories
const Company = db.define('company', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Company;