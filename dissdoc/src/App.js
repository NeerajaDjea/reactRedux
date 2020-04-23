import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PatientDetails from './components/patients/PatientDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/patient/:id' component={PatientDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
