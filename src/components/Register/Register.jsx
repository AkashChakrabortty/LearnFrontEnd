import React from "react";

const Register = () => {
  return (
    <div>
      <div className="card col-6 mx-auto">
        <div className="card-body text-primary">
          <form className=" d-flex flex-column gap-2">
            <label htmlFor="name" name="name" className="fs-4">
              Full name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Full name:"
              className="text-primary fs-4 p-2"
            />
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
            <label htmlFor="photoUrl" name="photoUrl" className="fs-4">
              PhotoUrl:
            </label>
            <input
              type="text"
              placeholder="Enter Your photoUrl:"
              className="text-primary fs-4 p-2"
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
