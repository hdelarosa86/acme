const request = require('supertest');
const app = require('../src/server');
const { db, Employee } = require('../src/server/db');

//Testing using Jest and supertest to test my endpoints

describe('/employees routes', () => {
  let doug, jones;
  let employee1 = {
    firstName: 'Doug',
    lastName: 'Johnson',
    email: 'djohnson@example.com',
  };

  let employee2 = {
    firstName: 'Jones',
    lastName: 'Smith',
    email: 'qsmith@example.com',
  };
  beforeAll(async (done) => {
    // wipe the db before each test block
    await db.sync({ force: true });
    employee1 = {
      firstName: 'Doug',
      lastName: 'Johnson',
      email: 'djohnson@example.com',
    };
    employee2 = {
      firstName: 'Jones',
      lastName: 'Smith',
      email: 'qsmith@example.com',
    };

    doug = await Employee.create(employee1);
    jones = await Employee.create(employee2);
    done();
  });

  afterAll(async () => {
    await db.close();
  });

  it('should GET all employees if no params are given', async () => {
    try {
      const response = await request(app).get('/api/employees').expect(200);

      expect(response.body.length).toBe(2);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining(employee1),
          expect.objectContaining(employee2),
        ])
      );
    } catch (err) {
      console.error(err);
    }
  });

  it('should GET employee with given id', async () => {
    try {
      const response = await request(app)
        .get('/api/employees/' + doug.id)
        .expect(200);
      expect(response.body).toEqual(expect.objectContaining(employee1));
      expect(response.body.firstName).toBe(doug.firstName);
      expect(response.body.lastName).toBe(doug.lastName);
      expect(response.body.email).toBe(doug.email);
    } catch (err) {
      fail(err);
    }
  });

  it('should CREATE a new employee', async () => {
    try {
      const billy = {
        firstName: 'Billy',
        lastName: 'Goat',
        email: 'bGoat@example.com',
      };
      const response = await request(app)
        .post('/api/employees')
        .send(billy)
        .expect(201);
      expect(response.body).toEqual(expect.objectContaining(billy));
      expect(response.body.firstName).toBe(billy.firstName);
    } catch (err) {
      fail(err);
    }
  });

  it('should UPDATE an employee', async () => {
    let update = {
      email: 'joseph@example.com',
      firstName: 'Joseph',
    };
    try {
      const response = await request(app)
        .patch('/api/employees/' + jones.id)
        .send(update)
        .expect(201);

      expect(response.body.id).toBe(jones.id);
      expect(response.body.email).toBe(update.email);
      expect(response.body.firstName).toBe(update.firstName);

      // Check the data in the database
      const updatedEmployee = await Employee.findOne({
        where: { id: response.body.id },
      });
      expect(updatedEmployee).toBeTruthy();
      expect(updatedEmployee.email).toBe(update.email);
      expect(updatedEmployee.firstName).toBe(update.firstName);
    } catch (err) {
      fail(err);
    }
  });

  it('should DELETE one employee if id is given', async () => {
    try {
      await request(app)
        .delete('/api/employees/' + doug.id)
        .expect(204);
      expect(await Employee.findOne({ where: { id: doug.id } })).toBeFalsy();
    } catch (err) {
      fail(err);
    }
  });
});
