export const createPatient = (patient) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('patients').add({
            ...patient,
            Department: "Medicine",
            Doctor: "Dr MD",
            HospitalId: "tytuyiuuiuoioip",
            createdAt: new Date()


        }).then(() => {
            dispatch({ type: 'CREATE_PATIENT', patient });

        }).catch((err) => {
            dispatch({ type: 'CREATE_PATIENT_ERROR', err });
        })
    }
}