import React from 'react';
import sidebarRoutes from '../../router/objectRoutes/SidebarRoutes';
import AdminSidebarRoutes from '../../router/objectRoutes/AdminSidebarRoutes';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const SidebarIcons = ({ path }) => {
  const { rol = 'USER' } = useSelector((state) => state.auth);
  let routes;
  if (rol === 'ADMIN') {
    routes = AdminSidebarRoutes;
  } else {
    routes = sidebarRoutes;
  }
  return (
    <div>
      {routes.map(({ subPath, Icon, name }) => (
        <Link replace={true} to={`${path}${subPath}`} activeClassName='active'>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </List>
        </Link>
      ))}
    </div>
  );
};

export default SidebarIcons;
