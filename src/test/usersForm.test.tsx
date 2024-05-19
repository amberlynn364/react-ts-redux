import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import UsersForm from '../components/UsersForm/UsersForm';

it('render UsersForm component', async () => {
  render(
    <Provider store={store}>
      <UsersForm />
    </Provider>
  );

  const pageTitle = screen.getByRole('heading', { name: 'Create User' });
  expect(pageTitle).toBeInTheDocument();
});
