import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from '../layouts/RootLayout';
import { RouterPaths } from '../lib/types';

const Home = lazy(() => import('../pages/Home/Home'));
const AddUserPage = lazy(() => import('../pages/AddUserPage/AddUserPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const ErrorBoundary = lazy(
  () => import('../pages/ErrorBoundary/ErrorBoundary')
);

export const routes = [
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
];

const router = createBrowserRouter(routes);

export default router;
