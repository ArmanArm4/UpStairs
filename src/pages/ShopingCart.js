import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import classes from "./pagesCss/ShopingCart.js";

function ShopingCart() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section>
        <div className={classes.phone_img}></div>
      </section>
    </>
  );
}

export default ShopingCart;
