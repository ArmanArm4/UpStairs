import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductsContext from "../context/ProductsContext";
import classes from "./pagesCss/device.module.css";
import BuyNowToCartBtns from "../components/BuyNowToCartBtns.js";
import Phones from "../components/Phones";
import BestSellers from "../components/BestSellers";
import Tablets from "../components/Tablets";
import SectionText from "../components/SectionText";
import ColorBtn from "../components/ColorBtn";
import MemoryBtn from "../components/MemoryBtn.js";

const colors = ["gray", "black", "gold", "red"];
const memories = [
  ["64", 0],
  ["128", 100],
  ["256", 200],
];

function Device() {
  const { devices, deviceAmountHandler, deviceMemoryHandler } =
    useContext(ProductsContext);
  const { links } = useParams();
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeMemory, setActiveMemory] = useState(memories[0]);
  const [selectedDevice, setSelectedDevice] = useState({});

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (selectedDevice.id) {
      deviceMemoryHandler(selectedDevice.id, activeMemory[0]);
    }

    // console.log(selectedDevice.id, activeMemory[0]);
  }, [activeMemory]);

  useEffect(() => {
    if (devices.length > 10) {
      setSelectedDevice(devices.filter((device) => device.id == links)[0]);
    }
  }, [links, devices]);
  // if (devices.length < 10) {
  //   return <div></div>;
  // }

  return (
    <>
      <Nav></Nav>
      <div className={classes.device_page}>
        <div className={classes.device_info}>
          <div
            className={classes.device_img}
            style={{
              backgroundImage: ` url(${selectedDevice.image})`,
            }}
          ></div>
          <div className={classes.device_information}>
            <div className={classes.device_text}>
              <h3>{selectedDevice.name} </h3>
              <h5>
                Unlimited talk, text, and data with mobile hotspot, nationwide
                coverage, and international reach. No long-term contract
              </h5>
            </div>
            <div className={classes.filter}>
              <div className={classes.color}>
                <p>Color</p>
                <div className={classes.colors}>
                  {colors.map((color) => {
                    return (
                      <ColorBtn
                        key={color}
                        activeColor={activeColor}
                        setActiveColor={setActiveColor}
                        id={color}
                        className={color}
                      ></ColorBtn>
                    );
                  })}
                </div>
              </div>
              <div className={classes.memory}>
                <p>Memory</p>
                <div className={classes.memory_btns}>
                  {memories.map((memory) => {
                    return (
                      <MemoryBtn
                        deviceMemoryHandler={deviceMemoryHandler}
                        key={memory}
                        activeMemory={activeMemory}
                        setActiveMemory={setActiveMemory}
                        id={memory}
                        className={memory}
                      ></MemoryBtn>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <BuyNowToCartBtns
          deviceAmountHandler={deviceAmountHandler}
          selectedDevice={selectedDevice}
          activeMemory={activeMemory}
        ></BuyNowToCartBtns>
        <SectionText value={"Phones"}></SectionText>
        <Phones></Phones>
        <SectionText value={"Best sellers"}></SectionText>
        <BestSellers></BestSellers>
        <SectionText value={"Tablets"}></SectionText>
        <Tablets></Tablets>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Device;
