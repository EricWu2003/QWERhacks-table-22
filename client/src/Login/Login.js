import * as React from 'react';
import 
{
  Stack, Button, TextField, Box, FormControl,
  InputLabel, InputAdornment, OutlinedInput, Typography, Link, getBackdropUtilityClass
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [userName, setUserName] = React.useState(""); // Text field
  const [password, setPassword] = React.useState(""); // Text field
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickLogin = () => {
    // Get info from username and password fields
    // If username and password match backend
    // Tell backend that user is logged in
    const requestBody = {
      username: userName,
      password: password
    }
    axios.get('http://localhost:8000/users/', requestBody)
    .then(function (response) {
      // Hardcode response.data type as Array
      // Find from array by user+pass key
      // If match, login, if no match, restart
      console.log(response.data);
      if (0==1) {
        alert("Successfully logged in!")
        window.location.href="/";
      } else {
        // If no match
        // clear current user/pass inputs (useful or no?)
        setUserName(""); // Need to attach to text field
        setPassword(""); // Need to attach to text field
        //window.location.href="/login";

        // error message appears
        alert("Username and password do not match any known login credentials.");
      }
    })
    .catch(function (error) {
      alert("Login failed")
      console.log(error);
    });
  }

  return (
    <Box m={2} maxWidth="400px">
      <Stack spacing={2} direction="column">
        <img src="https://www.qwerhacks.com/media/frog.svg" height="50px" width="50px"/>

        {/* Input for username */}
        <TextField label="Username" variant="outlined" 
        onChange={event => setUserName(event.target.value)}/>

        {/* Input for password */}
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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

        {/* login button */}
        <Button variant="contained"
          onClick={handleClickLogin}
        >
          Log in
        </Button>

        <Typography>Not a user? Click here to {}
          <Link href="/signup">
            Sign Up
          </Link>
          .
        </Typography>
      </Stack>
    </Box>
  );
}