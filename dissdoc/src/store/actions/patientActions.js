export const createPatient = (patient) => {
    return (dispatch, getState) => {

        dispatch({ type: 'CREATE_PATIENT', patient });
    }

}