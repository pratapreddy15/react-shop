import React from 'react';

const AuthContext = React.createContext({
  token: '',
  // eslint-disable-next-line no-unused-vars
  setToken: (token) => {}
});

export default AuthContext;
