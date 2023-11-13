import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../Layouts/ManiLayOut/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import OurMenu from "../Components/Pages/OurMenu/OurMenu";
import Order from "../Components/Pages/Order/Order/Order";
import Login from "../Components/Pages/Login/Login";

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
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    }
  ]);