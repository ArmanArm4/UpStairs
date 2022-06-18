import React from "react";
import classes from "./componentsCss/BuyNowToCartBtns.module.css";

function BuyNowToCartBtns() {
  return (
    <div className={classes.btns}>
      <div className={classes.text}>
        <p>Price</p>
        <p>$1199.99</p>
      </div>
      <button className={classes.buy_now}>Buy now</button>
      <button className={classes.add_to_cart}>Add to cart</button>
    </div>
  );
}

export default BuyNowToCartBtns;
