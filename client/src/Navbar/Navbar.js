import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

// This magic number was chosen to try and get the navbar to look good at all widths.
// The main concern is that the text on buttons shouldn't need to wrap on multiple lines.
// When text starts wrapping, that's when we need to switch to mobile mode.

export const LOGIN_URL = "/login";
export const SIGNUP_URL = "/signup";
export const ABOUT_URL = "/about";
export const HOME_URL = "/";


export default function Navbar() {


  let toolbar = (
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => {window.location.href=HOME_URL;}}
      >
        <HomeIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Hospital Meta Info
      </Typography>
      <Button
        color="inherit"
        onClick={() => {window.location.href=ABOUT_URL;}}
      >
        About Us
      </Button>
      <Button
        color="inherit"
        onClick={() => {window.location.href=SIGNUP_URL;}}
      >
        Sign Up
      </Button>
      <Button
        color="inherit"
        onClick={() => {window.location.href=LOGIN_URL;}}
      >
        Log In
      </Button>
    </Toolbar>
  );


  return (
    <Box>
      <AppBar position="fixed">
        {toolbar}
      </AppBar>

      {/* We render the toolbar twice: once in the AppBar and once in the page,
       so that the content of the page is not hidden beneath the AppBar.
       */}
      <Box visibility="hidden">
        {toolbar}
      </Box>
    </Box>
  );
}
