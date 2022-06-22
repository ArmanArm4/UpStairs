import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import classes from "./pagesCss/home.module.css";
import SectionText from "../components/SectionText.js";
import Phones from "../components/Phones.js";
import Tablets from "../components/Tablets.js";
import BestSellers from "../components/BestSellers.js";

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className={classes.Home_page}>
      <div className={classes.search_bar}>
        <i className="fas fa-search"></i>
        <input placeholder="Search..." type="text" />
      </div>
      <SectionText value={"Deal of the day"}></SectionText>
      <div className={classes.deal_img}>
        <div className={classes.big_deal_img}></div>
        <div className={classes.thumbs_up_img}></div>
      </div>
      <SectionText value={"Phones"}></SectionText>
      <Phones></Phones>
      <SectionText value={"Best sellers"}></SectionText>
      <BestSellers></BestSellers>
      <SectionText value={"Tablets"}></SectionText>
      <Tablets></Tablets>
    </section>
  );
}

export default Home;
