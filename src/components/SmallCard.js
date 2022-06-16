import React from "react";
import classes from "./componentsCss/smallCard.module.css";
import { Link } from "react-router-dom";

function SmallCard() {
  return (
    <div className={classes.small_card}>
      <div>
        <i className="far fa-heart"></i>
      </div>
      <Link className="links" to={"/"}>
        <h4>iPhone 13 Pro </h4>
        <h5>$999.99</h5>
      </Link>
    </div>
  );
}

export default SmallCard;
