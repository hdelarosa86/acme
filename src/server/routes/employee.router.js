const employeesRouter = require('express').Router();
const { Employee } = require('../db');
//CRUD routes GET, POST, PATCH, DELETE
employeesRouter.get('/', async (_, res) => {
  try {
    const employees = await Employee.findAll();
    return res.status(200).send(employees);
  } catch (err) {
    res.status(400).send(err);
  }
});

employeesRouter.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne({ where: { id: req.params.id } });
    return res.status(200).send(employee);
  } catch (err) {
    res.status(400).send(err);
  }
});
employeesRouter.post('/', async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    return res.status(201).send(newEmployee);
  } catch (err) {
    res.status(400).send(err);
  }
});
employeesRouter.patch('/:id', async (req, res) => {
  try {
    const foundEmployee = await Employee.findOne({
      where: { id: req.params.id },
    });
    const updatedEmployee = await foundEmployee.update(req.body);
    return res.status(201).end(updatedEmployee);
  } catch (err) {
    return res.status(400).send(err);
  }
});

employeesRouter.delete('/:id', async (req, res) => {
    try {
      const employee = await Employee.findOne({
        where: {
          id: req.params.id,
        },
      });
  
      if (employee === null) {
        res.status(404).send('Employee could not be found');
      } else {
        await Employee.destroy({
          where: {
            id: req.params.id,
          },
        });
        return res.status(204).send('Employee deleted');
      }
    } catch (err) {
      res.status(400).send(err);
    }
  });

module.exports = employeesRouter;
