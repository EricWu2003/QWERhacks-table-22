import * as React from 'react';
import 
{
  Stack, Button, TextField, Box, FormControl,
  InputLabel, InputAdornment, OutlinedInput, Typography, Link
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";


export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignUp = () => {
    console.log("Signing up...")
    if (userName === "") {
      alert("Username cannot be empty!")
      return;
    }
    if (password === "") {
      alert("Password cannot be empty!")
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords must match!")
      return;
    }

    const requestBody = {
      username: userName,
      password: password
    }
    // Check for match already
    axios.get('http://localhost:8000/users/', requestBody)
    .then(function (response) {
      // Hardcode response.data type as Array
      // Find from array by user+pass key
      // If match, login, if no match, restart
      console.log(response);
      console.log(Array.from(response.data).find(el => requestBody.username === el.username));
      if (Array.from(response.data).find(el => requestBody.username === el.username) != null) {
        alert("Sorry, that username is taken!")
        window.location.href="/signup"; 
      } else {
        axios.post('http://localhost:8000/users/add', requestBody)
        .then(function (response) {
          alert("Successfully signed up!")
          console.log(response);
          window.location.href="/";
        })
        .catch(function (error) {
          alert("Sorry, error signing up")
          console.log(error);
        });
      }
    })
    .catch(function (error) {
      alert("Signup failed")
      console.log(error);
    });
  }


  return (
    <Box m={2} maxWidth="400px" mx="auto">
        <center>
          <Stack spacing={3} direction="row" alignItems="center" justifyContent="center">
            <img src="https://www.qwerhacks.com/media/frog.svg" height="50px" width="50px" alt="QWER hacks logo" />
            <img src="https://www.qwerhacks.com/media/frog.svg" height="50px" width="50px" alt="QWER hacks logo" />
            <img src="https://www.qwerhacks.com/media/frog.svg" height="50px" width="50px" alt="QWER hacks logo" />
          </Stack>
        </center>
      <Stack spacing={2} direction="column">

        <Typography>
          Thanks for your interest! Sign up for a new account here:
        </Typography>


        {/* Input for username */}
        <TextField
          label="Username" variant="outlined"
          onChange={event => setUserName(event.target.value)}
        />

        {/* Input for password */}
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={event => setPassword(event.target.value)}
          />
        </FormControl>

        {/* Input for confirm password */}
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            error={password !== confirmPassword}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={event => setConfirmPassword(event.target.value)}
          />
        </FormControl>

        {/* signup button */}
        <Button variant="contained"
          onClick={handleSignUp}
        >Sign up</Button>

        {/* return to login */}
        <Typography>Already a user? Click here to {}
          <Link href="/login">
            Login
          </Link>
          .
        </Typography>
      </Stack>
    </Box>
  );
}