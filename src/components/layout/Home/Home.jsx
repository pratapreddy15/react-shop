import classes from './Home.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
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
        <p>
          <a href="#">Register</a>
          <span> or </span>
          <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
