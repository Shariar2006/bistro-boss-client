import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../Layouts/ManiLayOut/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import OurMenu from "../Components/Pages/OurMenu/OurMenu";

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
      ]
    },
  ]);