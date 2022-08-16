import React from "react";
import classes from "./componentsCss/userIconWindow.module.css";

function UserIconWindow({ profileWindowHandler }) {
  return (
    <>
      <div className={classes.user_profile}>
        <button className={classes.prim_btn}>Sign in</button>
        <button className={classes.second_btn}>Register</button>
        <div className={classes.line}></div>
        <div className={classes.link}>
          <i class="fas fa-heart"></i>Wish list
        </div>
        <div className={classes.link}>
          <i class="fas fa-user"></i>Edit profile
        </div>
        <div className={classes.link}>
          <i class="fas fa-cog"></i>Settings
        </div>
      </div>
    </>
  );
}

export default UserIconWindow;
