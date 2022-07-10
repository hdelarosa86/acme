import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const [singleEmployee, setSingleEmployee] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  let { id } = useParams();
  const fetchSingleEmployee = async () => {
    const { data } = await axios.get(`/api/employees/${id}`);
    setSingleEmployee(data);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
  };
  useEffect(() => {
    fetchSingleEmployee();
  }, []);

  const update = async () => {
    let updatedEmployee = { firstName, lastName, email };
    await axios.patch(`/api/employees/${id}`, updatedEmployee);
  };
  const fullName = `${firstName} ${lastName}`;
  return (
    <form>
      <h3>Editing {fullName}</h3>
      <div>
        <label htmlFor="First Name">First Name: </label>
        <input
          name="firstName"
          type="text"
          placeholder={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Last Name">Last Name: </label>
        <input
          name="lastName"
          type="text"
          placeholder={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Email">Email: </label>
        <input
          name="email"
          type="email"
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Link to="/employees">
          <button type="button" onClick={update}>
            Edit Employee
          </button>
        </Link>
      </div>
    </form>
  );
};

export default EditEmployee;
