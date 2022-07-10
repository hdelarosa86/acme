# TO SERVE LOCALLY
To serve this project locally, Postgres needs to be installed. Two databases need to be created, "acme" and "acme-test" to serve the project locally and to run the tests. 
'npm run start:dev' to start the local server
'npm run test' to run the test suite

## My Project

My project is an indexing React app with forms to create and update list itemts on top of a Express framework. I used Postgres and Sequelize for my database and ORM. State management is done locally wihtout the use of libraries like Redux due to the scope of the project.

### Server

The server is build using Express and it features two routes, one for companies and one for employees.

#### API

API consists of two models Employee and Company.
Employee {
  id,
  firstName,
  lastName,
  email
}

Company {
  id,
  name
}

##### TESTING
Testing is going to be done using Jest and supertest. I'm going to test the enpoints before creating my routes. Time permitting, I would test React components.

###### STEPS
 1. Work on the database and models. Constraints and validators
 2. Set up Express server to start serving static files and api routes
 3. Set up Jest tests to test endpoints
 4. Create React Components to fetch all data
 5. Create React Forms to update and/or create data
 6. Apply CSS for styling
