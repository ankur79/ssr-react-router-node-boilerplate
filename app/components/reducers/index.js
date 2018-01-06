const initialState = {
    isAuthenticated: false
  }
  
const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
        return {
            isAuthenticated: true
        }
        case 'AUTH_FAIL':
        return {
            isAuthenticated: false
        }
        default:
        return state
    }
}

export default authReducer;