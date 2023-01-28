import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root/Root.js"
import Login from "./Login/Login.js"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} />
        <Route path="login" element={<Login />} />
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
