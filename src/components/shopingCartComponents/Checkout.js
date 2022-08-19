import React from "react";
import classes from "../componentsCss/BuyNowToCartBtns.module.css";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useNavigate } from "react-router-dom";

function Checkout({ wantedItems }) {
  // check if user is signed in
  const { signedIn } = useAuthStatus();

  const navigate = useNavigate();

  const toSignIn = () => {
    navigate("/sign-in");
  };
  const checkout = () => {
    alert("I sell websites not phones");
  };

  let total = 0;
  let additional = 0;
  for (let i = 0; i < wantedItems.length; i++) {
    switch (wantedItems[i].memory) {
      case "64":
        additional = 0;
        break;
      case "128":
        additional = 100;

        break;
      case "256":
        additional = 200;
        break;
    }
    total += wantedItems[i].amount * wantedItems[i].price + additional;
  }

  return (
    <div className={classes.btns}>
      <div className={classes.text}>
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <button
        className={classes.buy_now}
        onClick={signedIn ? checkout : toSignIn}
      >
        Checkout
      </button>
    </div>
  );
}

export default Checkout;
