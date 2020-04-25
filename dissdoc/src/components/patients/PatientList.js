import React from 'react';
import PatientSummary from './PatientSummary';

const PatientList = ({ patients }) => {
  console.log(patients);
  return (
    <div className='patient-list section'>
      {patients &&
        patients.map((patient) => {
          return <PatientSummary patient={patient} key={patient.id} />;
        })}
    </div>
  );
};
export default PatientList;
