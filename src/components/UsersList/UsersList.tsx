import { Grid } from '@mui/material';
import { useEffect } from 'react';
import User from '../User/User';
import UserSkeleton from '../UserSkeleton/UserSkeleton';
import PageTitle from '../PageTitle/PageTitle';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setData } from '../../store/data/dataSlice';
import selectData from '../../store/data/dataSelector';
import { getUsers } from '../../api/users';

const UsersList = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        dispatch(setData(users));
      } catch (error) {
        console.error('Error fetching users data:', error);
        throw error;
      }
    };

    if (!data) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageTitle textContent="User's List" />
      {!data ? (
        <UserSkeleton />
      ) : (
        <Grid container spacing={2} sx={{ p: 2 }}>
          {data.map(({ id, name, username, email }) => (
            <User
              key={id}
              id={id}
              name={name}
              username={username}
              email={email}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default UsersList;
