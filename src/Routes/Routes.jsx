import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layot/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";


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
        }
      ]
    },
  ]);

  export default router;