import classes from './UserLogin.module.css';

import React, { useRef, useContext, useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';

import Spinner from '../UI/Spinner';
import AuthContext from '../../store/auth-context';
import useHttp from '../../hooks/use-http';
import { login } from '../../lib/api';

const UserLogin = () => {
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const initialUserName = searchParams.get('username');
  const initialPassword = searchParams.get('password');
  const { sendRequest, data, error, status } = useHttp(login);

  const userNameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const userName = userNameInputRef.current.value;
    const password = passwordInputRef.current.value;

    setIsLoggingIn(true);
    sendRequest({ userName: userName, password: password });
  };

  if (isLoggingIn && status === 'pending') {
    return (
      <div className="centered-horizontally">
        <Spinner />
      </div>
    );
  }

  if (status === 'completed' && data) {
    history.replace('/');
    authContext.setToken(data.token);
  }

  if (error) {
    return <p className="centered-horizontally">{error}</p>;
  }

  return (
    <div className={`${classes.userLogin} centered-horizontally`}>
      <form onSubmit={submitFormHandler}>
        <div className={classes.formControl}>
          <input
            ref={userNameInputRef}
            type="text"
            placeholder="Your username"
            id="userNameInput"
            defaultValue={initialUserName}
          />
        </div>
        <div className={classes.formControl}>
          <input
            ref={passwordInputRef}
            type="password"
            placeholder="Your password"
            id="passwordInput"
            defaultValue={initialPassword}
          />
        </div>
        <div className={classes.moreUsers}>
          <Link to="/users">Click here</Link>
          <span> for test users.</span>
        </div>
        <div className={`${classes.actions} centered-horizontally`}>
          <button type="submit" className="btn btn-medium btn-solid primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
