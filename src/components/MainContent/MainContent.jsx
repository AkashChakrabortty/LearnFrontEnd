import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Route from "../Route/Route";
const MainContent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Route></Route>,
      children: [
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default MainContent;
