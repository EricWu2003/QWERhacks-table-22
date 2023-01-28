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


  return (
    <Box m={2} maxWidth="400px">
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
        <Button variant="contained">Sign up</Button>

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