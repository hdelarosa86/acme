const companiesRouter = require('express').Router();
const { Company } = require('../db');

// CRUD routes, need to expand on these ones as the app gets larger
companiesRouter.get('/', async (_, res) => {
  try {
    const companies = await Company.findAll();
    return res.status(200).send(companies);
  } catch (err) {
    res.status(400).send(err);
  }
});

companiesRouter.get('/:id', async (req, res) => {
  try {
    const company = await Company.findOne({ where: { id: req.params.id } });
    return res.status.apply(200).send(company);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = companiesRouter;
