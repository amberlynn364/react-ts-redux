import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { UserDto } from '../../lib/types';
import Toast from '../Toast/Toast';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setShowAlert } from '../../store/showAlert/showAlertSlice';
import selectData from '../../store/data/dataSelector';
import { setData } from '../../store/data/dataSlice';
import { deleteUser } from '../../api/users';
import selectIsLoading from '../../store/isLoading/isLoadingSelector';
import { setIsLoading } from '../../store/isLoading/isLoadingSlice';

const User = ({ id, username, name, email }: UserDto) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoading = useAppSelector(selectIsLoading);

  const handleDeleteUser = () => {
    dispatch(setIsLoading(true));
    deleteUser(id)
      .then(() => {
        if (!data) return;
        dispatch(setData(data.filter((user) => user.id !== id)));
      })
      .then(() => dispatch(setShowAlert(true)))
      .catch((error) => {
        console.error('Error deleting user:', error);
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {username}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              onClick={handleDeleteUser}
              sx={{ cursor: 'pointer', width: 'max-content' }}
            >
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={handleDeleteUser}
              disabled={isLoading}
            >
              Delete User
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Toast toastText="User was deleted" />
    </>
  );
};

export default User;
