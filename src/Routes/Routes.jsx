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
import PrivetRoute from "../Pages/PrivetRoute/PrivetRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Profile from "../Pages/Profile/Profile";
import Blogs from "../Pages/Blogs/Blogs";


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
          element: <PrivetRoute><PropertyDetails></PropertyDetails></PrivetRoute>,
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
          element:<About></About>,
        },
        {
          path: "/update",
          element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
        },
        {
          path: "/user",
          element: <PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
          path: "/blog",
          loader: () => fetch('/blog.json'),
          element: <Blogs></Blogs>,
        }
      ]
    },
  ]);

  export default router;