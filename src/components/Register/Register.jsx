import React, { useContext } from "react";
import { userInfo } from "../../Context/AuthProvider";

const Register = () => {
  const { createUserE_P } = useContext(userInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserE_P(email, password);
  };
  return (
    <div>
      <div className="card col-6 mx-auto">
        <div className="card-body text-primary">
          <form className=" d-flex flex-column gap-2" onSubmit={handleSubmit}>
            <label htmlFor="name" className="fs-4">
              Full name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Full name:"
              className="text-primary fs-4 p-2"
              name="name"
            />
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
            <label htmlFor="photoUrl" className="fs-4">
              PhotoUrl:
            </label>
            <input
              type="text"
              placeholder="Enter Your photoUrl:"
              className="text-primary fs-4 p-2"
              name="photoUrl"
            />
            <button
              type="submit"
              className="btn btn-outline-primary fs-4 col-6 mx-auto"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
