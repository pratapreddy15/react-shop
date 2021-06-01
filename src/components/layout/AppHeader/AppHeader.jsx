import classes from './AppHeader.module.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';

const AppHeader = () => {
  const authCtx = useContext(AuthContext);
  const isUserLoggedIn = !!authCtx.token;

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
          {!isUserLoggedIn && (
            <li>
              <NavLink
                className={classes['appHeader__navigation--link']}
                activeClassName={classes.active}
                to="/login">
                Login
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              className={classes['appHeader__navigation--link']}
              activeClassName={classes.active}
              to="/products">
              Products
            </NavLink>
          </li>
          {isUserLoggedIn && (
            <li>
              <NavLink
                className={classes['appHeader__navigation--link']}
                activeClassName={classes.active}
                to="/cart">
                Cart
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default AppHeader;
