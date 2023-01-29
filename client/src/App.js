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

const theme = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: blue[500],
    },
  },
});


function App() {

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


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
