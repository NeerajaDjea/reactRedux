import React, { Component } from 'react';
import Notification from './Notification';
import PatientList from '../patients/PatientList';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard container'>
        <Notification />
        <div className='row'>
          <div className='col s12 m6'></div>
          <PatientList />
          <div className='col s12 m5 offset-m1'></div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
