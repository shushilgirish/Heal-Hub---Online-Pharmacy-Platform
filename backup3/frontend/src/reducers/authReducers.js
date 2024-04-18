//frontend/src/actions/authActions.js
const initialState = {
    userType: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          userType: action.payload,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          userType: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  