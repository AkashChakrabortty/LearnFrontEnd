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
        <div className="container d-flex justify-content-between">
          <div className="left-nav d-flex align-items-center">
            <Link to="/">
              <img src="./icons8-developer-96.png" alt="logo" />
            </Link>
            <Link to="/" className="text-decoration-none fs-3">
              LearnFrontEnd
            </Link>
          </div>
          <div className="right-nav fs-5 d-flex align-items-center">
            <Link to="/course" className="text-decoration-none ">
              Courses
            </Link>
            <Link to="/faq" className="text-decoration-none mx-3">
              FAQ
            </Link>
            <Link className="text-decoration-none " to="/blog">
              Blog
            </Link>
            <button
              onClick={toggleTheme}
              className="mx-3 text-primary border-primary"
            >
              Toggle Theme
            </button>
            {/* <Link className="text-decoration-none mx-3">ToggleTheme</Link> */}
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
