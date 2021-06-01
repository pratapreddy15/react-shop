import classes from './UserItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const capitalizeFirstLetter = (word) => {
  const newWord = word[0].toUpperCase() + word.substring(1);
  return newWord;
};

const UserItem = (props) => {
  const { userName, password, firstName, lastName } = props;
  const normalizedFirstName = capitalizeFirstLetter(firstName);
  const normalizedLastName = capitalizeFirstLetter(lastName);
  const displayName = `${normalizedFirstName} ${normalizedLastName}`;

  return (
    <div className={`${classes.userItem} centered-horizontally`}>
      <div className={classes.formWrapper}>
        <div className={classes.displayName}>
          <span>{displayName}</span>
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
      <div>
        <Link
          className="bg-transparent btn btn-flat btn-medium primary"
          to={{
            pathname: '/login',
            search: `username=${userName}&password=${password}`
          }}>{`Login as ${normalizedFirstName}`}</Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  password: PropTypes.string
};

export default UserItem;
