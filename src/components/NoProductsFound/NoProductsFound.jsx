import React from 'react';

import classes from './NoProductsFound.module.css';

const NoProductsFound = () => {
  return (
    <div className={classes.noProductsFound}>
      <p>No products found!</p>
    </div>
  );
};

export default NoProductsFound;
