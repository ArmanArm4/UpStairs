import React from "react";
import { Link } from "react-router-dom";
import classes from "./componentsCss/bigCard.module.css";

function BigCard() {
  return (
    <div className={classes.big_card}>
      <div>{/* <i className="far fa-heart"></i> */}</div>
    </div>
  );
}

export default BigCard;
