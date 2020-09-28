import React from 'react';
import { useForm } from 'react-hook-form';
import { fetchLogin } from '../stores/authReducer';
import { useDispatch } from 'react-redux';
import Copyright from '../components/ui/Copyright';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as yup from 'yup';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const dispath = useDispatch();
  const loginSchema = yup.object().shape({
    user: yup.string().required(),
    password: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });

  const classes = useStyles();
  const onSubmit = async (data) => {
    try {
      await dispath(fetchLogin(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container component='main' maxWidth='xs' onSubmit={handleSubmit(onSubmit)}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            name='user'
            inputRef={register({
              required: true,
              minLength: 1,
            })}
            label='Intodusca su usuario'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            fullWidth
            error={errors.user ? true : false}
          />

          <TextField
            name='password'
            type='password'
            inputRef={register({
              required: true,
              minLength: 1,
            })}
            label='Intodusca su contrasenia'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            fullWidth
            error={errors.password ? true : false}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Login
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
