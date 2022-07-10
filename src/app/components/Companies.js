import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const getCompanies = async () => {
    const { data } = await axios.get('/api/companies');
    setCompanies(data);
  };

  useEffect(() => {
    getCompanies();
  }, []);
  return (
    <ul>
      {companies.map((company) => (
        <li key={company.id}>
          <Link to={`/companies/${company.id}`}>{company.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Companies;
