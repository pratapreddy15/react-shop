import classes from './Layout.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../Header/AppHeader';

const Layout = (props) => {
  return (
    <React.Fragment>
      <AppHeader />
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
