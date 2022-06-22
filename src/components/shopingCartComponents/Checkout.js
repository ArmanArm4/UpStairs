import React from "react";
import classes from "../componentsCss/BuyNowToCartBtns.module.css";

function Checkout({ wantedItems }) {
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
      <button className={classes.buy_now}>Checkout</button>
    </div>
  );
}

export default Checkout;
