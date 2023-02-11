import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid gray',
    padding: '1em',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    marginTop: '0.5em',
    display: 'block',
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  '#birthdate': {
    paddingTop: '3em',
  },
}));

export default function RegisterForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="username"
        label="Username"
        value={values.username}
        onChange={handleChange('username')}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange('password')}
      />
      <TextField
        id="birthdate"
        label="Birthdate"
        type="date"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.birthdate}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Sign Up
      </Button>
    </form>
  );
}
