import { AccountBox, Group } from '@material-ui/icons';

const AdminSidebarRoutes = [
  {
    subPath: '/admin/profile',
    Icon: AccountBox,
    name: 'Perfil',
  },
  {
    subPath: '/admin/usuarios',
    Icon: Group,
    name: 'Usuarios',
  },
];

export default AdminSidebarRoutes;
