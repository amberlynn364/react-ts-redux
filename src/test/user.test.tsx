/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../store/store';
import User from '../components/User/User';
import { UserDto } from '../lib/types';

describe('renders components', () => {
  it('render User component', async () => {
    const user: UserDto = {
      id: 1,
      username: 'testuser',
      name: 'Test User',
      email: 'test@example.com',
    };

    render(
      <Provider store={store}>
        <User {...user} />
      </Provider>
    );

    expect(screen.getByText(user.username)).toBeInTheDocument();
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText('Delete User')).toBeInTheDocument();
  });

  it('calls handleDeleteUser when the user name is clicked', async () => {
    const user: UserDto = {
      id: 1,
      username: 'testuser',
      name: 'Test User',
      email: 'test@example.com',
    };

    render(
      <Provider store={store}>
        <User {...user} />
      </Provider>
    );

    const nameElement = screen.getByText(user.name);
    await userEvent.click(nameElement);

    await waitFor(() => {
      expect(screen.getByText('User was deleted')).toBeInTheDocument();
    });
  });
});
