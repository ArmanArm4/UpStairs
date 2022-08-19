import React, { useState } from "react";
import classes from "./pagesCss/sign.module.css";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import GmailAuth from "../components/GmailAuth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetMailDispatched, setResetMailDispatched] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setResetMailDispatched(true);
      setWrongEmail(false);
    } catch (error) {
      setResetMailDispatched(false);
      setWrongEmail(true);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.bg}></div>
      <section className={classes.forgotPasswordPage}>
        <form>
          <h5>Forgot Password</h5>

          <label>Email</label>
          <input
            type="email"
            placeholder={"Franklynmackie@gmail.com"}
            onChange={(e) => onChange(e)}
            required
          />
          {wrongEmail && (
            <p className={classes.error}>
              The Email you’ve entered is incorrect.
            </p>
          )}
          {resetMailDispatched && (
            <p className={classes.success}>
              We have sent you an email to reset your password <br />
              (Check your spam folder in Gmail).
            </p>
          )}
          <button type="submit" onClick={(e) => onSubmit(e)}>
            {!resetMailDispatched ? "Reset Password" : "Send Again"}
          </button>
          <Link className={classes.link} to={"/sign-up"}>
            Don't have an account?
          </Link>
          <div className={classes.or}>
            <div>OR</div>
          </div>
          <GmailAuth></GmailAuth>
        </form>
      </section>
    </div>
  );
}

export default ForgotPassword;
