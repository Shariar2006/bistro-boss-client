import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../Layouts/ManiLayOut/MainLayOut";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            
        }
      ]
    },
  ]);