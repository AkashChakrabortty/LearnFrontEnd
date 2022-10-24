import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="container d-flex justify-content-between">
          <div className="left-nav d-flex align-items-center">
            <Link>
              <img src="./icons8-developer-96.png" alt="logo" />
            </Link>
            <Link className="text-decoration-none fs-3">LearnFrontEnd</Link>
          </div>
          <div className="right-nav fs-5 d-flex align-items-center">
            <Link className="text-decoration-none ">Courses</Link>
            <Link className="text-decoration-none mx-3">FAQ</Link>
            <Link className="text-decoration-none ">Blog</Link>
            <Link className="text-decoration-none mx-3">ToggleTheme</Link>
            <Link className="text-decoration-none ">Login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
