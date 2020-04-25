import authReducer from './authReducer';
import patientReducer from './patientReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    patient: patientReducer
});

export default rootReducer