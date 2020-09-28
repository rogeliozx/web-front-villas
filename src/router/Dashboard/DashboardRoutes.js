import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../../components/Dashboard/Profile';

const DashboardRoutes = ({ path }) => {
  console.log(path);
  return (
    <>
      <Route path={`${path}/profile`} component={Profile} />
    </>
  );
};

export default DashboardRoutes;
