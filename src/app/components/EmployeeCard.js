import React from 'react';

const EmployeeCard = (props) => {
  return (
    <div className='employeeCard'>
      <h4>
        {props.firstName} {props.lastName}
      </h4>
      <p>{props.email}</p>
      <p className="small">Click card to edit</p>
    </div>
  );
};

export default EmployeeCard;
