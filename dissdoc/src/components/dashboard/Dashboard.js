import React, { Component } from 'react';
import Notification from './Notification';
import PatientList from '../patients/PatientList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { patients } = this.props;
    // console.log(this.props);
    return (
      <div className='dashboard container'>
        <Notification />
        <div className='row'>
          <div className='col s12 m6'></div>
          <PatientList patients={patients} />
          <div className='col s12 m5 offset-m1'></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    patients: state.firestore.ordered.patients,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'patients',
    },
  ])
)(Dashboard);
