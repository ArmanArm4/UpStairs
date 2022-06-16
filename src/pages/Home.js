import React from "react";
import classes from "./pagesCss/home.module.css";
import SectionText from "../components/SectionText.js";
import Phones from "../components/Phones.js";

function Home() {
  return (
    <section className={classes.Home_page}>
      <div className={classes.search_bar}>
        <i class="fas fa-search"></i>
        <input placeholder="Search..." type="text" />
      </div>

      <SectionText value={"Deal of the day"}></SectionText>
      <div className={classes.deal_img}>
        <div className={classes.big_deal_img}></div>
        <div className={classes.thumbs_up_img}></div>
      </div>

      <Phones></Phones>
    </section>
  );
}

export default Home;
