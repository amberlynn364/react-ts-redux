import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default RootLayout;
