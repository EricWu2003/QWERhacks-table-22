import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root/Root.js"
import Login from "./Login/Login.js"
import Signup from "./Login/Signup.js"
import Navbar from "./Navbar/Navbar.js";
import About from "./About/About.js";
import HospitalPage from "./HospitalPage/HospitalPage.js";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';

import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";


const theme = createTheme({
 
});


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="hospitals/:hospital" element={<HospitalPage />} />
      </>
    )
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: green[800],
          },
          secondary: {
            main: blue[500],
          },
        },
      }),
    [prefersDarkMode],
  );


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
