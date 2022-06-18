import { useLocation, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";

import classes from "./pagesCss/device.module.css";
import BuyNowToCartBtns from "../components/BuyNowToCartBtns.js";
import Phones from "../components/Phones";
import BestSellers from "../components/BestSellers";
import Tablets from "../components/Tablets";
import SectionText from "../components/SectionText";

function Device() {
  const [selectedDevice, setSelectedDevice] = useState({});
  const { devices } = useContext(ProductsContext);
  const { pathname } = useLocation();

  const { links } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    setSelectedDevice(devices.filter(device => device.id == links)[0]);
  }, [devices]);

  return (
    <div className={classes.device_page}>
      <div className={classes.device_info}>
        <div className={classes.device_img}></div>
        <div className={classes.device_information}>
          <div className={classes.device_text}>
            <h3>iPhone 12 Pro Max</h3>
            <h5>
              Unlimited talk, text, and data with mobile hotspot, nationwide
              coverage, and international reach. No long-term contract
            </h5>
          </div>
          <div className={classes.filter}>
            <div className={classes.color}>
              <p>Color</p>
              <div className={classes.colors}>
                <div className={classes.gray}></div>
                <div className={classes.black}></div>
                <div className={classes.gold}></div>
                <div className={classes.red}></div>
              </div>
            </div>
            <div className={classes.memory}>
              <p>Memory</p>
              <div className={classes.memory_btns}>
                <div className={classes.memory_btn}>64 GB</div>
                <div className={classes.memory_btn}>128 GB</div>
                <div className={classes.memory_btn}>256 GB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuyNowToCartBtns></BuyNowToCartBtns>
      <SectionText value={"Phones"}></SectionText>
      <Phones></Phones>
      <SectionText value={"Best sellers"}></SectionText>
      <BestSellers></BestSellers>
      <SectionText value={"Tablets"}></SectionText>
      <Tablets></Tablets>
    </div>
  );
}

export default Device;
