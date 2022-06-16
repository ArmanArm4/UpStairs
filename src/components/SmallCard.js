import React from "react";
import classes from "./componentsCss/smallCard.module.css";

function SmallCard() {
  return (
    <div className={classes.small_card}>
      <div>
        <i class="far fa-heart"></i>
      </div>
      <h4>iPhone 13 Pro</h4>
      <h5>$999.99</h5>
    </div>
  );
}

export default SmallCard;
