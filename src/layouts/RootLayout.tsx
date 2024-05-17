import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main>
      <h1>Hello</h1>
      <Outlet />
    </main>
  );
};

export default RootLayout;
