import classes from './UserItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
  const { userName, password } = props;

  return (
    <div className={`${classes.userItem}`}>
      <div className={classes.displayName}>
        <span>{props.displayName.toUpperCase()}</span>
      </div>
      <div className={classes.userName}>
        <span>Username: </span>
        {userName}
      </div>
      <div className={classes.password}>
        <span>Password: </span>
        {password}
      </div>
    </div>
  );
};

UserItem.propTypes = {
  displayName: PropTypes.string,
  userName: PropTypes.string,
  password: PropTypes.string
};

export default UserItem;
