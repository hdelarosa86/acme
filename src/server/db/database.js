const { Sequelize } = require('sequelize');
const pkg = require('../../../package.json');
const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}-test` : pkg.name;

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    logging: false,
  }
);

//authenticating the DB before initializing
const authenticateDB = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.\n');
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}\n`);
  }
};

module.exports = { db, authenticateDB };