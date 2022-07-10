import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="companies"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="employees"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Employees
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar