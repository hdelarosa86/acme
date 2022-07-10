const { Company, Employee } = require('./models');
const { db, authenticateDB } = require('./database');

module.exports = {
  Company,
  Employee,
  db,
  authenticateDB,
};
