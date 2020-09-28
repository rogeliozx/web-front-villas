import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {
  EmailOutlined,
  PhoneOutlined,
  PhoneIphoneOutlined,
  AssignmentOutlined,
  VpnKeyOutlined,
  PeopleAltOutlined,
} from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CardInfo = ({ styles = {}, user = {}, Component }) => {
  const {
    email = '',
    phone = '',
    tastk = '',
    cellphone = '',
    code = '',
    guests = '',
  } = user;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <List className={{ ...classes.root, ...styles }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Email' secondary={email} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Telefono' secondary={phone} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIphoneOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Celular' secondary={cellphone} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AssignmentOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Consigna' secondary={tastk} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VpnKeyOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Codigo de visita' secondary={code} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Visitas' secondary={guests} />
      </ListItem>
      <ListItem style={{ justifyContent: 'center' }}>
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Editar
        </Button>
      </ListItem>
      <Modal
        open={open}
        onClose={handleClose}
        hideBackdrop={false}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {Component ? (
          <Component {...user} handleClose={handleClose} />
        ) : (
          <h1>Introduzca componente</h1>
        )}
      </Modal>
    </List>
  );
};

export default CardInfo;
