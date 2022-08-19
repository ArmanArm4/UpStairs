import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./componentsCss/nav.module.css";
import { Link } from "react-router-dom";
import UserIconWindow from "./UserIconWindow.js";

function Nav() {
  const [profileWindowIsOpen, setprofileWindowIsOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setprofileWindowIsOpen(false);
  }, [pathname]);

  const profileWindowHandler = () => {
    setprofileWindowIsOpen((previousState) => !previousState);
  };
  return (
    <>
      <div className={classes.nav_bg}></div>
      <nav>
        <Link to={"/"}>
          <div className={classes.logo}></div>
        </Link>
        <ul>
          <li>
            <Link to={`/user/shoping-cart`} className={"white"}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <i onClick={profileWindowHandler} className="fas fa-user"></i>
            {profileWindowIsOpen && (
              <UserIconWindow
                profileWindowHandler={profileWindowHandler}
              ></UserIconWindow>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
