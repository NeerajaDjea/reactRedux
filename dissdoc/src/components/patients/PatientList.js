import React from 'react';
import PatientSummary from './PatientSummary';
import { Link } from 'react-router-dom';

const PatientList = ({ patients }) => {
  console.log(patients);
  return (
    <div className='patient-list section'>
      {patients &&
        patients.map((patient) => {
          console.log(patient);
          return (
            <Link to={'/patient/' + patient.id} key={patient.id}>
              <PatientSummary patient={patient} />
            </Link>
          );
        })}
    </div>
  );
};
export default PatientList;
