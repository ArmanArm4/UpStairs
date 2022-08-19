import { useRef, useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import SmallCard from "./SmallCard.js";
import classes from "./componentsCss/phones.module.css";
import ProductsContext from "../context/ProductsContext";

function Phones() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const { phones } = useContext(ProductsContext);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [phones]);

  return (
    <div>
      <motion.div ref={carousel} className={classes.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={classes.inner_carousel}
        >
          {phones.map((phone) => {
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

export default Phones;
