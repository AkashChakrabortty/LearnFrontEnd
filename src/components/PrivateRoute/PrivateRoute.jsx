import React, { useContext } from "react";
import { userInfo } from "../../Context/AuthProvider";
import Login from "../Login/Login";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(userInfo);

  return <div>{user ? children : <Login></Login>}</div>;
};

export default PrivateRoute;
