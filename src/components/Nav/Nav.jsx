import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../../Context/AuthProvider";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./style.css";
const Nav = () => {
  const { user, logOut } = useContext(userInfo);
  const photoURL = user?.photoURL;
  const displayName = user?.displayName;
  const handleLogOut = () => {
    logOut();
  };

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
          <div className="right-nav fs-lg-3 d-flex align-items-center col-8 justify-content-center mx-2">
            <Link to="/course" className="text-decoration-none ">
              Courses
            </Link>
            <Link to="/faq" className="text-decoration-none mx-1 mx-lg-3">
              FAQ
            </Link>
            <Link className="text-decoration-none " to="/blog">
              Blog
            </Link>

            <span>
              <React.Fragment>
                <ToggleSwitch label="Dark" />
              </React.Fragment>
            </span>
            {user ? (
              <>
                <img
                  src={photoURL}
                  title={displayName}
                  alt={displayName}
                  style={{ height: 25, width: 25, borderRadius: "50%" }}
                ></img>
                <Link className="text-decoration-none" onClick={handleLogOut}>
                  Logout
                </Link>
              </>
            ) : (
              <Link className="text-decoration-none" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
