import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { EditUser } from '../../stores/authReducer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as yup from 'yup';

const useStyles = makeStyles({
  root: {
    height: '17rem',
    maxWidth: '40rem',
    position: 'relative',
    left: '40vw',
    top: '10vw',
    right: '25vw',
  },
});

const FormEditInfo = ({
  code = '',
  tastk = '',
  _id = '',
  handleClose = () => {},
}) => {
  const dispath = useDispatch();
  const classes = useStyles();
  const loginSchema = yup.object().shape({
    tastk: yup.string().required(),
    code: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });
  const onSubmit = async (data) => {
    try {
      await dispath(EditUser({ ...data, _id }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={classes.root}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <CardActionArea>
          <CardContent>
            <TextField
              name='code'
              type='text'
              inputRef={register({
                required: true,
                minLength: 1,
              })}
              label='Codigo visitas'
              className={classes.textField}
              margin='normal'
              variant='outlined'
              defaultValue={code}
              fullWidth
              error={errors.code ? true : false}
            />

            <TextField
              name='tastk'
              type='text'
              inputRef={register({
                required: true,
                minLength: 1,
              })}
              label='Intodusca su contrasenia'
              className={classes.textField}
              margin='normal'
              variant='outlined'
              defaultValue={tastk}
              fullWidth
              error={errors.tastk ? true : false}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size='small'
            variant='contained'
            color='secondary'
            onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            size='small'
            variant='contained'
            color='primary'
            type='submit'>
            Actualizar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormEditInfo;
