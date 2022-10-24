import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "../Route/Route";
const MainContent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Route></Route>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default MainContent;
