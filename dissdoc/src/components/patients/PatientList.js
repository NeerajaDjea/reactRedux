import React from 'react';

const PatientList = () => {
  return (
    <div className='project-list section'>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content blue-text text-darken-3'>
          <span className='card-title'> Patient Name</span>
          <p>Posted by Dr. M D</p>
          <p className='grey-text'> 21st April,2am</p>
        </div>
      </div>

      <div className='card z-depth-0 project-summary'>
        <div className='card-content blue-text text-darken-3'>
          <span className='card-title'> Patient Name</span>
          <p>Posted by Dr. Y D</p>
          <p className='grey-text'> 21st April,2am</p>
        </div>
      </div>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content blue-text text-darken-3'>
          <span className='card-title'> Patient Name</span>
          <p>Posted by Dr. T S</p>
          <p className='grey-text'> 21st April,3am</p>
        </div>
      </div>
    </div>
  );
};
export default PatientList;
