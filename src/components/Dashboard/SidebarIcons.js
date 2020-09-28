import React from 'react';
import sidebarRoutes from '../../router/objectRoutes/SidebarRoutes';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const SidebarIcons = ({ path }) => {
  return (
    <div>
      {sidebarRoutes.map(({ subPath, Icon, name }) => (
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
