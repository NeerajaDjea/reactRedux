const initstate = {}

const authReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login successful');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signed out successfully')
            return state;


        default:
            return state
    }


}
export default authReducer