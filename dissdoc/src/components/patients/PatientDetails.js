import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const PatientDetails = (props) => {
  const { patient } = props;
  if (patient) {
    return (
      <div className='container section patient-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>Patient Name -{patient.Name}</span>
            <p> Hospital id : {patient.HospitalId}</p>
            <p>{patient.Notes}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>Posted by {patient.Doctor}</div>
            <div>24th April 2020</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container center'>
        <p> Loading patient details.....</p>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const patients = state.firestore.data.patients;
  const patient = patients ? patients[id] : null;
  return {
    patient: patient,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'patients' }])
)(PatientDetails);
