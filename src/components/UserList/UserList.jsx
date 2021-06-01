import classes from './UserList.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import UserItem from '../UserItem/UserItem';

const UserList = (props) => {
  return (
    <div className={`${classes.userList} centered-vertically`}>
      {props.users.map((u) => {
        return (
          <UserItem
            key={u.id}
            userName={u.username}
            password={u.password}
            firstName={u.name.firstname}
            lastName={u.name.lastname}
          />
        );
      })}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default UserList;
