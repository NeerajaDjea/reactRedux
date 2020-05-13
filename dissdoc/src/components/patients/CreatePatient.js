import React, { Component } from 'react';
import { createPatient } from '../../store/actions/patientActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreatePatient extends Component {
  state = {
    Name: '',
    HospitalId: '',
    Doctor: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPatient(this.state);
    // console.log(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-4'>Patient Details</h5>
          <div className='input-field'>
            <label htmlFor='patientName'>Name</label>
            <input type='text' id='patientName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='hospitalId'>Hospital Id</label>
            <input type='text' id='hospitalId' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='details'> Patient Details</label>
            <textarea
              id='details'
              className='materialize-textarea'
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className='input-field'>
            <button
              className='btn blue darken-10 z-depth-0'
              onSubmit={this.handleSubmit}
            >
              Add Patient
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPatient: (patient) => dispatch(createPatient(patient)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePatient);
