import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import User from '../User/User';
import { UserDto } from '../../lib/types';
import UserSkeleton from '../UserSkeleton/UserSkeleton';
import PageTitle from '../PageTitle/PageTitle';

const UsersList = () => {
  const [users, setUsers] = useState<UserDto[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await usersData.json();
      setUsers(data);
      console.log(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <PageTitle textContent="User's List" />
      {!users ? (
        <UserSkeleton />
      ) : (
        <Grid container spacing={2} sx={{ p: 2 }}>
          {users.map(({ id, name, username, email, company }) => (
            <User
              key={id}
              name={name}
              username={username}
              email={email}
              company={company}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default UsersList;
