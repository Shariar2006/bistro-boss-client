import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../Layouts/ManiLayOut/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import OurMenu from "../Components/Pages/OurMenu/OurMenu";
import Order from "../Components/Pages/Order/Order/Order";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Components/Pages/Secret/Secret";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyCart from "../Components/Pages/Dashboard/MyCart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/ourMenu',
            element: <OurMenu></OurMenu>
        },
        {
            path: '/order/:category',
            element: <Order></Order>
        },
        {
            path: '/secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);