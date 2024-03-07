import { Outlet } from 'react-router-dom';
import { Header, Footer } from '.';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
