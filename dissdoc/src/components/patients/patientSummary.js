import React from 'react';

const PatientSummary = ({ patient }) => {
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content blue-text text-darken-3'>
        <span className='card-title'> {patient.title}</span>
        <p>Posted by Dr. M D</p>
        <p className='grey-text'> 21st April,2am</p>
      </div>
    </div>
  );
};
export default PatientSummary;
