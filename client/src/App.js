import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root/Root.js"
import Login from "./Login/Login.js"
import Signup from "./Login/Signup.js"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </>
    )
  );


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
