import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddEmployee = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <div>
        <label htmlFor="First Name">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="George"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Last Name">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Jetson"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="Email">Email: </label>
        <input
          name="email"
          type="email"
          placeholder="example@sample.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Link to="/employees">
          <button
            type="button"
            onClick={() => props.createEmployee(firstName, lastName, email)}
          >
            Add New Employee
          </button>
        </Link>
      </div>
    </form>
  );
};

export default AddEmployee;
