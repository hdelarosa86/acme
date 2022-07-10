const Company = require('./company.model');
const Employee = require('./employee.model');

//Association

Employee.belongsTo(Company);
Company.hasMany(Employee);

module.exports = {
  Company,
  Employee,
};
