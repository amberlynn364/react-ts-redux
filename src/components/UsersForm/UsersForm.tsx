import { useFormik } from 'formik';
import { Button, Stack, TextField } from '@mui/material';
import { userCredential } from '../../lib/schema';
import { UserCredential } from '../../lib/types';
import PageTitle from '../PageTitle/PageTitle';

const UsersForm = () => {
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
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
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
          <Button type="submit" disabled={!dirty || !isValid}>
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default UsersForm;
