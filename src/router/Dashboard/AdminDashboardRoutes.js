import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../../components/Dashboard/Profile';
import ListUsers from '../../components/AdminDashboard/ListUsers';
const AdminDashboardRoutes = ({ path }) => {
  return (
    <>
      <Route path={`${path}/admin/profile`} component={Profile} />
      <Route path={`${path}/admin/usuarios`} component={ListUsers} />
    </>
  );
};

export default AdminDashboardRoutes;
