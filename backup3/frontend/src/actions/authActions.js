//frontend/src/actions/authActions.js
export const loginUser = (userType) => ({
    type: 'LOGIN_USER',
    payload: userType,
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  