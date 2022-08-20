import React from "react";
import classes from "./componentsCss/bestsellers.module.css";
import classe from "./componentsCss/bigCard.module.css";
import { Link } from "react-router-dom";
// import BigCard from "./BigCard";

function BestSellers() {
  return (
    <>
      <div className={`${classes.big_cards} + ${classes.first_card}`}>
        <Link to={"/device/iPhone_11_pro"} className={classe.big_card}>
          <div className={classe.bg_one}></div>
        </Link>
        <Link to={"/device/iPhone_se"} className={classe.big_card}>
          <div className={classe.bg_two}></div>
        </Link>
      </div>
      <div className={classes.big_cards}>
        <Link to={"/device/iPhone_12_mini"} className={classe.big_card}>
          <div className={classe.bg_three}></div>
        </Link>
        <Link to={"/device/iPhone_11"} className={classe.big_card}>
          <div className={classe.bg_four}></div>
        </Link>
      </div>
    </>
  );
}

export default BestSellers;
