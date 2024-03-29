import React from "react";
import "../components/componentsCss/gmailAuth.css";
import { db } from "../firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

function GmailAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      // if user, doesn't exist, create user
      //exist is a js method
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          wishList: [],
          cart: {},
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={"Gmail_link"} onClick={onGoogleClick}>
      <div className="gmail-Icon"></div>
      Sign in with Gmail
    </div>
  );
}

export default GmailAuth;
