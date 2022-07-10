import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const { data } = await axios.get('/api/employees');
    setEmployees(data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      <ul>
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
    </div>
  );
};

export default Employees;
