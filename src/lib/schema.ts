import * as yup from 'yup';

export const userCredential = yup.object().shape({
  username: yup
    .string()
    .required('Username is required field')
    .min(4, 'Minimum 4 characters'),
  email: yup
    .string()
    .required('Email is required field')
    .email('Must be a valid email (example@gmail.com)'),
  name: yup
    .string()
    .required('Name is required field')
    .matches(/^[А-ЯA-Z][а-яa-z]*/, 'Name must start with an uppercase letter')
    .min(4, 'Minimum 4 characters'),
});
