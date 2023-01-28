import * as React from 'react';
import 
{
  Stack, Button, TextField, Box, FormControl,
  InputLabel, InputAdornment, OutlinedInput, Typography, Link
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Box m={2} maxWidth="400px">
      <Stack spacing={2} direction="column">
        <img src="https://www.qwerhacks.com/media/frog.svg" height="50px" width="50px"/>

        {/* Input for username */}
        <TextField label="Username" variant="outlined" />

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
          />
        </FormControl>

        {/* login button */}
        <Button variant="contained">Log in</Button>
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