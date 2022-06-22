import React from "react";
import classes from "./componentsCss/nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className={classes.nav_bg}></div>
      <nav>
        <Link to={"/"}>
          <div className={classes.logo}></div>
        </Link>
        <ul>
          <li>
            <Link to={"/user/shoping-cart"} className={"white"}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <i className="fas fa-user"></i>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
