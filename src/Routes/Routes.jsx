import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layot/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About/About";


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
            path: "/",
            loader: () => fetch('/property-data.json'),
            element: <Home></Home>,
        },
        {
          path: "/details/:id",
          loader: ()=> fetch('/property-data.json'),
          element: <PropertyDetails></PropertyDetails>,
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/about",
          element: <About></About>,
        }
      ]
    },
  ]);

  export default router;