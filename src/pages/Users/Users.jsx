import React, { useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import { getAllUsers } from '../../lib/api';
import NoProductsFound from '../../components/NoProductsFound/NoProductsFound';
import Spinner from '../../components/UI/Spinner';
import UserList from '../../components/UserList/UserList';

const Users = () => {
  const { sendRequest, data: allUsers, error, status } = useHttp(getAllUsers);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === 'pending') {
    return (
      <div className="centered-vertically">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="focused centered-vertically">{error}</p>;
  }

  if (status === 'completed' && (!allUsers || allUsers.length === 0)) {
    return <NoProductsFound />;
  }

  return <UserList users={allUsers} />;
};

export default Users;
