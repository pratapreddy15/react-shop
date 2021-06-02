import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AuthContext from './auth-context';

const AuthProvider = (props) => {
  const [authToken, setAuthToken] = useState('');

  const authContext = {
    token: authToken,
    setToken: (userToken) => setAuthToken(userToken)
  };

  return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;
