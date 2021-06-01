import React from 'react';

const AuthContext = React.createContext({
  token: '',
  user: {},
  // eslint-disable-next-line no-unused-vars
  setUser: (userData) => {},
  // eslint-disable-next-line no-unused-vars
  setToken: (token) => {}
});

export default AuthContext;
