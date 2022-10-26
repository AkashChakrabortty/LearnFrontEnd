import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Blog/Blog";
import CheckOutPage from "../CheckOutPage/CheckOutPage";
import Course from "../Course/Course";
import CourseDetails from "../CourseDetails/CourseDetails";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
        {
          path: "/checkoutPage/:id",
          loader: async ({ params }) => {
            return fetch(`https://course-five.vercel.app/course/${params.id}`);
          },
          element: (
            <PrivateRoute>
              <CheckOutPage></CheckOutPage>
            </PrivateRoute>
          ),
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
