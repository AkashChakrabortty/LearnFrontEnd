import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="card col-6 mx-auto">
        <div className="card-body text-primary">
          <form className=" d-flex flex-column gap-2">
            <label htmlFor="email" name="email" className="fs-4">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Your email:"
              className="text-primary fs-4 p-2"
            />
            <label htmlFor="password" name="password" className="fs-4">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Your password:"
              className="text-primary fs-4 p-2"
            />
            <button
              type="submit"
              className="btn btn-outline-primary fs-4 col-6 mx-auto"
            >
              Login
            </button>
          </form>
          <hr />
          <div className="login-icons text-center">
            <Link>
              <i className="fa-brands fa-github fs-2"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-google fs-2 mx-4"></i>
            </Link>
          </div>
          <hr />
          <div className="register text-center">
            <button
              type="submit"
              className="btn btn-outline-primary  col-6 mx-auto fs-4"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
