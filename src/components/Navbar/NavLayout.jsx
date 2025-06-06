import React from 'react';
import Navbar from './Nav';
import { Outlet, useLocation } from 'react-router-dom';

const NavLayout = () => {
  const location = useLocation();
  const hideOnRoutes = ['/', '/login', '/signup'];
  const shouldShowNavbar = !hideOnRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default NavLayout;