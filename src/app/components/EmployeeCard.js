import React from 'react';

const EmployeeCard = (props) => {
  return (
    <div>
      <h4>
        {props.firstName} {props.lastName}
      </h4>
      <p>{props.email}</p>
      <p>Click card to edit</p>
    </div>
  );
};

export default EmployeeCard