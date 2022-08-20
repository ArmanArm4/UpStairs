import React from "react";
import classes from "./componentsCss/userIconWindow.module.css";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

function UserIconWindow({ profileWindowHandler }) {
  // check if user is signed in
  const { signedIn } = useAuthStatus();

  const navigate = useNavigate();
  const auth = getAuth();
  const LogOutHandler = () => {
    auth.signOut();
    window.location.href = "/sign-in";
  };

  const SignInHandler = () => {
    navigate("/sign-in");
  };
  const RegiterHandler = () => {
    navigate("/sign-up");
  };
  return (
    <>
      <div className={classes.user_profile}>
        {!signedIn && (
          <>
            <button onClick={SignInHandler} className={classes.prim_btn}>
              Sign in
            </button>
            <button onClick={RegiterHandler} className={classes.second_btn}>
              Register
            </button>
          </>
        )}
        {signedIn && (
          <>
            <div className={`${classes.link} ${classes.disabled}`}>
              <i className="fas fa-heart"></i>Wish list
            </div>
            <div className={`${classes.link} ${classes.disabled}`}>
              <i className="fas fa-user"></i>Edit profile
            </div>
            <div className={classes.link} onClick={LogOutHandler}>
              <i className="fas fa-sign-out-alt"></i>LogOut
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default UserIconWindow;
