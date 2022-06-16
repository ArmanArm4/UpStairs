import React from "react";
import classes from "./componentsCss/nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={classes.logo}></div>
      <ul>
        <li>
          <i className="fas fa-shopping-cart"></i>
        </li>
        <li>
          <i className="fas fa-user"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
