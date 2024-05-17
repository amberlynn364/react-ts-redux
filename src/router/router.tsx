import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorBoundary from '../pages/ErrorBoundary/ErrorBoundary';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import AddUserPage from '../pages/AddUserPage/AddUserPage';
import { RouterPaths } from '../lib/types';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: RouterPaths.RootLayout,
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RouterPaths.AddUser,
        element: <AddUserPage />,
      },
    ],
  },
  {
    path: RouterPaths.NotFoundPage,
    element: <NotFoundPage />,
  },
]);

export default router;
