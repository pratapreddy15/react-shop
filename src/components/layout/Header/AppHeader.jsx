import classes from './AppHeader.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className={classes.appHeader}>
      <div className={classes['appHeader__logo']}>
        <NavLink
          className={classes['appHeader__logo--link']}
          activeClassName={classes.active}
          to="/">
          React Shop
        </NavLink>
      </div>
      <nav className={classes['appHeader__navigation']}>
        <ul>
          <li>
            <NavLink
              className={classes['appHeader__navigation--link']}
              activeClassName={classes.active}
              to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes['appHeader__navigation--link']}
              activeClassName={classes.active}
              to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default AppHeader;
