import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
