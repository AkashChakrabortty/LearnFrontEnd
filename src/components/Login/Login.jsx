import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../Context/AuthProvider";
const Login = () => {
  const { logIn_E_P, googleSignIn, githubSignIn } = useContext(userInfo);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logIn_E_P(email, password);
    navigate("/");
  };

  const handleGoogle = (event) => {
    event.preventDefault();
    googleSignIn();
    navigate("/");
  };

  const handleGithub = (event) => {
    event.preventDefault();
    githubSignIn();
    navigate("/");
  };

  return (
    <div>
      <div className="card col-6 mx-auto">
        <div className="card-body text-primary">
          <form className=" d-flex flex-column gap-2" onSubmit={handleSubmit}>
            <label htmlFor="email" className="fs-4">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Your email:"
              className="text-primary fs-4 p-2"
              name="email"
            />
            <label htmlFor="password" className="fs-4">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Your password:"
              className="text-primary fs-4 p-2"
              name="password"
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
            <Link onClick={handleGithub}>
              <i className="fa-brands fa-github fs-2"></i>
            </Link>
            <Link onClick={handleGoogle}>
              <i className="fa-brands fa-google fs-2 mx-4"></i>
            </Link>
          </div>
          <hr />
          <div className="register text-center">
            <Link to="/register">
              <button
                type="submit"
                className="btn btn-outline-primary  col-6 mx-auto fs-4"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
