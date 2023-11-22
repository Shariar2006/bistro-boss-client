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
import AllUsers from "../Components/Pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Components/Pages/Dashboard/Admin/AddItem";
import ManageItem from "../Components/Pages/Dashboard/Admin/ManageItem";
import UpdateItem from "../Components/Pages/Dashboard/Admin/UpdateItem";
import MyCart from "../Components/Pages/Dashboard/NormalUser/MyCart";
import PayMent from "../Components/Pages/Dashboard/NormalUser/Payment/PayMent";
import AdminHome from "../Components/Pages/Dashboard/Admin/AdminHome";
import UserHome from "../Components/Pages/Dashboard/NormalUser/UserHome";

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
          path: 'useHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <PayMent></PayMent>
        },

        //admin path
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
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
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/foodMenu/${params.id}`)
        },
      ]
    }
  ]);