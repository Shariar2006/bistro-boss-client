import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../Layouts/ManiLayOut/MainLayOut";
import Home from "../Components/Pages/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);