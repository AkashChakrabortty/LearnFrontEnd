import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import CourseDetails from "../CourseDetails/CourseDetails";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Route from "../Route/Route";
const MainContent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Route></Route>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/course",
          loader: async () => {
            return fetch(`https://course-five.vercel.app/`);
          },
          element: <Course></Course>,
        },
        {
          path: "/course/:id",
          loader: async ({ params }) => {
            return fetch(`https://course-five.vercel.app/course/${params.id}`);
          },
          element: <CourseDetails></CourseDetails>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
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
