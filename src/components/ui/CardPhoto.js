import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import avatar from '../../assets/image/avatar.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
  },
  name: {
    textAlign: 'center',
  },
});

const CardPhoto = ({ styles, picture = avatar, name = '' }) => {
  const classes = useStyles();
  return (
    <Card className={{ ...classes.root, ...styles }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          alt='Foto de perfil'
          image={picture}
          title='Foto perfil'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.name}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPhoto;
