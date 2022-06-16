import React from "react";
import classes from "./componentsCss/nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={classes.logo}></div>
      <ul>
        <li>
          <i class="fas fa-shopping-cart"></i>
        </li>
        <li>
          <i class="fas fa-user"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
