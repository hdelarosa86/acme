import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Companies from './Companies';
import Employees from './Employees';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="companies" element={<Companies />} />
        <Route path="companies" element={<Employee />} />
      </Routes>
    </div>
  );
};

export default App;
