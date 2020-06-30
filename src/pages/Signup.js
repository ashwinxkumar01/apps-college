import React, { useState } from 'react';
import {Redirect} from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FormLabel } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.huffingtonpost.com/2016-02-03-1454538177-6729202-1156952a9865492c403b26f277_008_SMU_MainQuadAerial.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
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

export default function SignInSide() {
  const classes = useStyles();
  const [usernameError, setUsernameError] = useState({ usernameError: false });
  const [username, setUsername] = useState({ username: '' });
  const [password, setPassword] = useState({ password: '' });
  const [cpassword, setcPassword] = useState({ cpassword: '' });
  const [display, setDisplay] = useState({ display: '' });
  
  if(sessionStorage.getItem("userData")){
      return(<Redirect to='/loginhome/dashboard' />)
  }

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
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={e => {
                const newUsername = { username: e.target.value };
                setUsername(newUsername);
                console.log(newUsername.username);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  if (cpassword.cpassword !== password.password) {
                    setDisplay({ display: 1});
                  } else if (password.password.length < 6) {
                    setDisplay({ display: 1});
                  } else {
                    fetch("/signup", {
                      method: "POST",
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      // body: JSON.stringify(["national_ranking", "+15", "national_ranking", "-30"])
                      body: JSON.stringify({
                        Username: username.username,
                        Password: password.password
                      })
                    }).then(response => {
                      return response.json();
                    }).then(data => {
                      console.log(data);
                      if (data["True"] === 1) {
                        setDisplay({ display: data["True"] });
                      } else {
                        sessionStorage.setItem("userData", username.username);
                        window.location.href = "http://127.0.0.1:5000/loginhome/dashboard";
                      }
                    });
                  }
                }
              }
              }
              autoComplete="email"
              autoFocus
              error={usernameError.usernameError}
              helperText={usernameError.usernameError ? "Email not valid!" : ' '}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => {
                const newPassword = { password: e.target.value };
                setPassword(newPassword);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  if (cpassword.cpassword !== password.password) {
                    setDisplay({ display: 1});
                  } else if (password.password.length < 6) {
                    setDisplay({ display: 1});
                  } else {
                    fetch("/signup", {
                      method: "POST",
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      // body: JSON.stringify(["national_ranking", "+15", "national_ranking", "-30"])
                      body: JSON.stringify({
                        Username: username.username,
                        Password: password.password
                      })
                    }).then(response => {
                      return response.json();
                    }).then(data => {
                      console.log(data);
                      if (data["True"] === 1) {
                        setDisplay({ display: data["True"] });
                      } else {
                        sessionStorage.setItem("userData", username.username);
                        window.location.href = "http://127.0.0.1:5000/loginhome/dashboard";
                      }
                    });
                  }
                }
              }
              }
              error={(password.password.length < 6 && password.password.length > 0)}
              helperText={(password.password.length < 6 && password.password.length > 0) ? "Password not 6 characters!" : ' '}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => {
                const newPassword = { cpassword: e.target.value };
                setcPassword(newPassword);
                console.log(newPassword.cpassword);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  if (cpassword.cpassword !== password.password) {
                    setDisplay({ display: 1});
                  } else if (password.password.length < 6) {
                    setDisplay({ display: 1});
                  } else {
                    fetch("/signup", {
                      method: "POST",
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      // body: JSON.stringify(["national_ranking", "+15", "national_ranking", "-30"])
                      body: JSON.stringify({
                        Username: username.username,
                        Password: password.password
                      })
                    }).then(response => {
                      return response.json();
                    }).then(data => {
                      console.log(data);
                      if (data["True"] === 1) {
                        setDisplay({ display: data["True"] });
                      } else {
                        sessionStorage.setItem("userData", username.username);
                        window.location.href = "http://127.0.0.1:5000/loginhome/dashboard";
                      }
                    });
                  }
                }
              }
              }
              error={password.password !== cpassword.cpassword}
              helperText={password.password !== cpassword.cpassword ? "Passwords don't match!" : ' '}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => {
                //e.preventDefault();
                if (cpassword.cpassword !== password.password) {

                } else if (password.password.length < 6) {

                } else {
                  fetch("/signup", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify(["national_ranking", "+15", "national_ranking", "-30"])
                    body: JSON.stringify({
                      Username: username.username,
                      Password: password.password
                    })
                  }).then(response => {
                    return response.json();
                  }).then(data => {
                    console.log(data);
                    if (data["True"] === 1) {
                      setUsernameError(true);
                    } else {
                      sessionStorage.setItem("userData", username.username);
                      window.location.href = "http://127.0.0.1:5000/loginhome/dashboard";
                    }
                  });

                }
              }
              }
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/loginhome/login" variant="body2">
                  {"Already have an account? Log In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              {display.display === 1 && <p>Sign Up Failed</p>}
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}