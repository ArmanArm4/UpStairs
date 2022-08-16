import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import classes from "./pagesCss/home.module.css";
import SectionText from "../components/SectionText.js";
import Phones from "../components/Phones.js";
import Tablets from "../components/Tablets.js";
import BestSellers from "../components/BestSellers.js";
import SearchBar from "../components/SearchBar/SearchBar";

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { devices } = useContext(ProductsContext);

  const [filteredDevices, setfilteredDevices] = useState([]);

  const searchBarHandler = e => {
    setfilteredDevices([]);

    if (e) {
      for (let i = 0; i < devices.length; i++) {
        if (devices[i].name.toLowerCase().includes(e.toLowerCase())) {
          // filteredDevices.push(devices[i]);
          setfilteredDevices(previousState => [devices[i], ...previousState]);
        }
      }
    }
  };
  // console.log(filteredDevices);
  return (
    <section className={classes.Home_page}>
      <SearchBar
        searchBarHandler={searchBarHandler}
        filteredDevices={filteredDevices}
      ></SearchBar>

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
