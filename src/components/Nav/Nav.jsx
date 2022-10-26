import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Nav = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <nav>
        <div className="container-fluid d-flex justify-content-between gap-2 p-2">
          <div className="left-nav d-flex align-items-center text-center col-4">
            <Link to="/">
              <img
                src="./icons8-developer-96.png"
                alt="logo"
                className="col-6"
              />
            </Link>
            <Link to="/" className="text-decoration-none fs-lg-2">
              LearnFrontEnd
            </Link>
          </div>
          <div className="right-nav fs-lg-3 d-flex align-items-center col-8 justify-content-end">
            <Link to="/course" className="text-decoration-none ">
              Courses
            </Link>
            <Link to="/faq" className="text-decoration-none mx-1 mx-lg-3">
              FAQ
            </Link>
            <Link className="text-decoration-none " to="/blog">
              Blog
            </Link>
            <button
              onClick={toggleTheme}
              className="mx-lg-3 mx-1 text-primary border-primary"
            >
              Toggle Theme
            </button>
            <Link className="text-decoration-none " to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
