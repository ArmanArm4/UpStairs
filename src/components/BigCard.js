import React from "react";
import { Link } from "react-router-dom";
import classes from "./componentsCss/bigCard.module.css";

function BigCard() {
  return (
    <div className={classes.big_card}>
      <div>
        <i className="far fa-heart"></i>
      </div>
      <Link className="links" to={"/"}>
        <h4>iPhone 13 Pro</h4>
        <h5>$999.99</h5>
      </Link>
    </div>
  );
}

export default BigCard;
