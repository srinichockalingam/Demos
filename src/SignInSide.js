import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.halcyonagri.com/">
        Halcyon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
      backgroundImage: 'url('+require ('./Images/Halcyon.jpg')+')',      //'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(23,82,142)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  testerror:{
    border: '1px solid red'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

const MyButton = styled(Button)({
  background: "primary"
});

const MyTextField = styled(TextField)({
  borderColor: 'rgb(0,0,0)'
});

function SignInSide(){
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    formErrors:{
      emailstate:false,
      passwordstate:false
    }
  });
  
  const validate =values => {
    if (!values.email) {
      setValues({...values,errorsemail:"Required"}) ;
    } 

    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      setValues({...values,errorspassword:"Required"}) ;
    }  else if (!passwordRegex.test(values.password)) {
      values.errorspassword = "Invalid password. Must contain one number";
    }
  };

  const handleclick = e => {
    e.preventDefault();
    if ((values.email === "admin") && (values.password === "admin"))
    return setValues({...values,a:true})
    else
    return alert("Wrong Username Or Password")   
  };

  const handleChange = name => event => {
    /*console.log (name,event.target)    
    let value = event.target.value;
    if (value.length < 3) return console.log("MAKEIT TRUE");*/
    setValues({ ...values, [name]: event.target.value });
  }

  if (values.a) return (<Redirect to ="/Home"></Redirect>);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            HALCYON
          </Typography>
          <form className={classes.form} noValidate>
            <MyTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              value = {values.email}
              error = {values.state}
              onChange={handleChange('email')}
            />
            <MyTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value = {values.password}
              onChange={handleChange('password')}
            />
            <div className="inputfeedback">{values.errorspassword}</div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <MyButton 
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleclick}
            >
              Sign In
            </MyButton>
            
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}


export default withRouter(SignInSide)
/*function nav1(){
  <dashboard />
};
<Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

*/