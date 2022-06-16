import React from "react";
import classes from "./componentsCss/bestsellers.module.css";
import BigCard from "./BigCard";

function BestSellers() {
  return (
    <>
      <div className={`${classes.big_cards} + ${classes.first_card}`}>
        <BigCard></BigCard>
        <BigCard></BigCard>
      </div>
      <div className={classes.big_cards}>
        <BigCard></BigCard>
        <BigCard></BigCard>
      </div>
    </>
  );
}

export default BestSellers;
