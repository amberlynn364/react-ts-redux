import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Home from '../pages/Home/Home';

test('render Home component', async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const pageTitle = screen.getByRole('heading', { name: "User's List" });
  expect(pageTitle).toBeInTheDocument();
});
