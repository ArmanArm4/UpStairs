import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionText from "./SectionText";
import SmallCard from "./SmallCard.js";
import classes from "./componentsCss/phones.module.css";

const images = [1, 2, 3, 4, 5];

function Phones() {
  // const [devices, setdevices] = useState({});

  // const devicesRequest = async () => {
  //   let response = await fetch(
  //     "https://online-shop-upstairs-default-rtdb.firebaseio.com/devices.json"
  //   );
  //   let user = await response.json();
  //   setdevices(user);
  //   console.log(user);
  // };
  // useMemo(() => {
  //   devicesRequest();
  // }, []);
  const [width, setWidth] = useState(0);
  const [resize, setResize] = useState(0);

  window.addEventListener("resize", () => {
    console.log("a");
  });

  const carousel = useRef();

  useEffect(() => {
    setWidth(
      (carousel.current.scrollWidth - carousel.current.offsetWidth) * -1
    );
  }, [carousel]);
  return (
    <>
      <motion.div ref={carousel} className={classes.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: width }}
          className={classes.inner_carousel}
        >
          {images.map(image => {
            return (
              <motion.div key={image} className={classes.item}>
                <SmallCard device={""}></SmallCard>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Phones;
