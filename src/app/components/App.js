import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Companies from './Companies';
import Employees from './Employees';
import EditEmployee from './EditEmployee';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="companies" element={<Companies />} />
        <Route path="employees" element={<Employees />} />
        <Route path="employees/:id" element={<EditEmployee />} />
      </Routes>
    </div>
  );
};

export default App;
