const initstate = {
    patients: [
        { id: '1', title: 'patient1', content: 'blah blah blah' },
        { id: '2', title: 'patient2', content: 'blah blah blah' },
        { id: '3', title: 'patient3', content: 'blah blah blah' },

    ]
}

const patientReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'CREATE_PATIENT':
            console.log('created patient', action.patient)
    }
    return state

}
export default patientReducer