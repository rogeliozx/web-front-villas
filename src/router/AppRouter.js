import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../views/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { loading, _id, rol = 'USER' } = useSelector((state) => state.auth);

  useEffect(() => {}, [dispatch]);

  if (loading) {
    return <h5>Espere...</h5>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path='/login'
            component={Login}
            isAuthenticated={!!_id}
          />
          <PrivateRoute path='/Dashboard' isAuthenticated={!!_id} rol={rol} />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
