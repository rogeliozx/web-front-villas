import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../views/Dashboard';
import AdminDashboard from '../views/AdminDashboard';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, rol, ...rest }) => {
  let Component;
  if (rol === 'ADMIN') {
    Component = AdminDashboard;
  } else {
    Component = Dashboard;
  }
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
