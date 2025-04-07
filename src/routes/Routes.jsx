import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/AddService";
import AllServices from "../pages/AllServices";
import ServiceDetails from "../pages/ServiceDetails";
import ManageService from "../pages/ManageService";
import BookedService from "../pages/BookedService";
import ServiceToDo from "../pages/ServiceToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Register></Register>,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-service",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/booked-service",
        element: (
          <PrivateRoute>
            <BookedService></BookedService>
          </PrivateRoute>
        ),
      },
      {
        path: "/service-to-do",
        element: (
          <PrivateRoute>
            <ServiceToDo></ServiceToDo>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
