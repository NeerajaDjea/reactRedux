import React from 'react';

const PatientDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className='container section patient-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Patient Name -{id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Dr M D</div>
          <div>24th April 2020</div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
