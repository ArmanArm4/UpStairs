import { useRef, useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import SmallCard from "./SmallCard.js";
import classes from "./componentsCss/phones.module.css";
import ProductsContext from "../context/ProductsContext";

function Tablets() {
  const { tablets } = useContext(ProductsContext);

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(
      (carousel.current.scrollWidth - carousel.current.offsetWidth) * -1
    );
  }, [tablets]);

  return (
    <div>
      <motion.div ref={carousel} className={classes.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: width }}
          className={classes.inner_carousel}
        >
          {tablets.map(phone => {
            return (
              <motion.div key={phone.id} className={classes.item}>
                <SmallCard device={phone}></SmallCard>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tablets;
