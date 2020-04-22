import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/'>New Patient</NavLink>{' '}
      </li>
      <li>
        <NavLink to='/'> Log Out</NavLink>{' '}
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating blue dark-7'>
          {' '}
          MD{' '}
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedInLinks;
