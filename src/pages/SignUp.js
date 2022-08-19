import React, { useState } from "react";
import classes from "./pagesCss/sign.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import GmailAuth from "../components/GmailAuth";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    wishList: [],
    cart: {},
  });
  const [isError, setIsError] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
        formData.wishList,
        formData.cart
      );
      const user = userCredential.user;

      updateProfile(auth.currentUser, { displayName: formData.name });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      setIsError(true);
    }
  };
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className={classes.main}>
      <div className={classes.bg}></div>
      <section>
        <form>
          <h5>Sign up to UpStairs</h5>
          <label>Name</label>
          <input
            type="text"
            id="name"
            placeholder={"Franklyn Mackie"}
            onChange={(e) => onChange(e)}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder={"Franklynmackie@gmail.com"}
            onChange={(e) => onChange(e)}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder={"Franklyn123456"}
            onChange={(e) => onChange(e)}
          />
          {isError && (
            <p className={classes.error}>
              there is already an account with this email
            </p>
          )}
          <button type="submit" onClick={(e) => onSubmit(e)}>
            Sign Up
          </button>
          <Link className={classes.link} to={"/sign-in"}>
            Already have an account?
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

export default SignUp;
