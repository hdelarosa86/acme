const { db, Company, Employee } = require('../src/server/db');

//seed script to populate the database

const seed = async () => {
  await db.sync({ force: true });

  await Employee.bulkCreate([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johnDoe@gmail.com',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janeSmith@gmail.com',
    },
  ]);

  //Need to add more fields {address?, number of employees?}
  await Company.bulkCreate([
    {
      name: 'Foo',
    },
    {
      name: 'Bar',
    },
    {
      name: 'Quux',
    },
    {
      name: 'Epsilon',
    },
  ]);
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Something went wrong!');
      console.error(err);
      db.close();
    });
}