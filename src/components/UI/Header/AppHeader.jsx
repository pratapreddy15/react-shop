import React from 'react';

import classes from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={classes.appHeader}>
      <div className={classes.logo}>React Shop</div>
      <nav>
        <ul>
          <li>Products</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};
export default AppHeader;
