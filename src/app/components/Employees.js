import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';
import AddEmployee from './AddEmployee';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const { data } = await axios.get('/api/employees');
    setEmployees(data);
  };

  const createEmployee = async (firstName, lastName, email) => {
    let newEmployee = { firstName, lastName, email };
    let { data } = await axios.post('./api/employees', newEmployee);

    setEmployees((arr) => [...arr, data]);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      <ul className="employeeList">
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              <EmployeeCard
                id={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                email={employee.email}
              />
            </Link>
          </li>
        ))}
      </ul>
      <AddEmployee createEmployee={createEmployee} />
    </div>
  );
};

export default Employees;
