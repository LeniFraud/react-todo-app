import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'layout';
import { Loader } from 'components';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};