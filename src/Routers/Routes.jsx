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
import AllUsers from "../Components/Pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Components/Pages/Dashboard/Admin/AddItem";
import ManageItem from "../Components/Pages/Dashboard/Admin/ManageItem";

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
        },

        //admin path
        {
          path: 'allUser',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageItem',
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
      ]
    }
  ]);