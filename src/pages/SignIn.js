import React, { useState } from "react";
import classes from "./pagesCss/sign.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GmailAuth from "../components/GmailAuth";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      if (!userCredential.user) return;
      setIsError(false);
      navigate("/");
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className={classes.main}>
      <div className={classes.bg}></div>
      <section className={classes.signIn}>
        <form>
          <h5>Sign In to UpStairs</h5>
          <label>Email</label>
          <input
            type="email"
            placeholder={"Franklynmackie@gmail.com"}
            id="email"
            onChange={(e) => onChange(e)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder={"Franklyn123456"}
            id="password"
            onChange={(e) => onChange(e)}
          />
          {isError && (
            <p className={classes.error}>
              The credentials you’ve entered is incorrect.
            </p>
          )}
          <button type="submit" onClick={(e) => onSubmit(e)}>
            Sign In
          </button>
          <Link className={classes.link} to={"/sign-up"}>
            Don't have an account?
          </Link>
          <div className={classes.or}>
            <div>OR</div>
          </div>
          <GmailAuth></GmailAuth>
        </form>

        <div className={classes.forgotPassword}>
          <Link to={"/forgot-password"} className={classes.link}>
            Forgot password?
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
