import { useFormik } from 'formik';
import { Button, Stack, TextField } from '@mui/material';
import { userCredential } from '../../lib/schema';
import { UserCredential } from '../../lib/types';
import PageTitle from '../PageTitle/PageTitle';
import Toast from '../Toast/Toast';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setShowAlert } from '../../store/showAlert/showAlertSlice';
import selectData from '../../store/data/dataSelector';
import { setData } from '../../store/data/dataSlice';
import { createUser } from '../../api/users';
import selectIsLoading from '../../store/isLoading/isLoadingSelector';
import { setIsLoading } from '../../store/isLoading/isLoadingSlice';

const UsersForm = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoading = useAppSelector(selectIsLoading);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    dirty,
    isValid,
  } = useFormik<UserCredential>({
    initialValues: { username: '', email: '', name: '' },
    validationSchema: userCredential,
    onSubmit: async (dataValues) => {
      try {
        dispatch(setIsLoading(true));
        const newUser = await createUser(dataValues);

        if (!data) {
          dispatch(setData([newUser]));
        } else {
          dispatch(setData([...data, newUser]));
        }

        dispatch(setShowAlert(true));
      } catch (error) {
        console.error('Error creating new user:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    },
  });

  return (
    <>
      <PageTitle textContent="Create User" />
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px',
          paddingTop: '150px',
        }}
      >
        <Stack spacing={2} width={400}>
          <TextField
            id="username"
            name="username"
            label="User name"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            id="name"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <Button type="submit" disabled={!dirty || !isValid || isLoading}>
            {!isLoading ? 'Submit' : 'Creating...'}
          </Button>
        </Stack>
      </form>
      <Toast toastText="User is successfully create!" />
    </>
  );
};

export default UsersForm;
