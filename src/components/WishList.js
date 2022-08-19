import { useRef, useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import UserAuthContext from "../context/UserAuthContext";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import SmallCard from "./SmallCard.js";
import SectionText from "./SectionText";
import classes from "./componentsCss/phones.module.css";
import ProductsContext from "../context/ProductsContext";

function WishList() {
  const auth = getAuth();

  const { devices } = useContext(ProductsContext);
  const { wishList, UpdateWishList } = useContext(UserAuthContext);

  const [wishListData, setWishListData] = useState([]);

  useEffect(() => {
    let wishDevicesInfo = [];
    wishList.forEach((wishdevice) => {
      console.log(wishdevice);
      wishDevicesInfo = [
        ...wishDevicesInfo,
        devices.filter((device) => device.id === wishdevice)[0],
      ];
    });
    console.log("wish", wishDevicesInfo);
    setWishListData(wishDevicesInfo);
  }, [devices, wishList]);

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(
      (carousel.current.scrollWidth - carousel.current.offsetWidth) * -1
    );
  });

  return (
    <>
      {wishListData.length > 0 && (
        <SectionText value={"Wish list"}></SectionText>
      )}

      <div>
        <motion.div ref={carousel} className={classes.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: width }}
            className={classes.inner_carousel}
          >
            {wishListData.map((dev) => {
              return (
                <motion.div key={dev.id} className={classes.item}>
                  <SmallCard device={dev} FromwishList={true}></SmallCard>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default WishList;
