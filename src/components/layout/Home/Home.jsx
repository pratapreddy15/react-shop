import classes from './Home.module.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';

const Home = () => {
  const authCtx = useContext(AuthContext);
  console.log('Token', authCtx.token);

  return (
    <div className={classes.home}>
      <div className={classes.top}>
        Transforming my knowledge and skills of ReactJS to model the real world e-commerce website.
      </div>
      <div className={classes.bottom}>
        Welcome to React Shop! A sample e-commerce site offering a wide range of products.
      </div>
      <div className={classes.callToAction}>
        <p>
          <NavLink className={classes.link} to="/products">
            Browse
          </NavLink>{' '}
          for all the available products.
        </p>
        {!authCtx.token && (
          <>
            <p>
              <a href="#">Register</a>
              <span> or </span>
              <NavLink to="/login">Login</NavLink>
            </p>
            <p>
              <NavLink to="/users">Click here</NavLink>
              <span> to get a list of users you can use for login.</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
