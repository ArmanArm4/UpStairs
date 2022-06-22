import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import classes from "./pagesCss/shopingCart.module.css";
import SectionText from "../components/SectionText.js";
import CartItem from "../components/shopingCartComponents/CartItem.js";
import Checkout from "../components/shopingCartComponents/Checkout";

function ShoppingCart() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { devices, deviceAmountHandler } = useContext(ProductsContext);

  const wantedItems = devices.filter(device => device.amount > 0);

  const [shoppingCartItems, setShoppingCartItems] = useState([[], []]);

  const items = { ...localStorage };
  const Array = [[], []];

  useEffect(() => {
    for (const key in items) {
      if (key !== "wishList") {
        Array[0].push(key.slice(0, -7));
        Array[1].push(items[key]);
      }
    }
    setShoppingCartItems(Array);
  }, []);

  return (
    <section className={classes.parentElement}>
      {wantedItems.length === 0 && (
        <div className={classes.emptyShoppingCart}>
          <h4>Your cart is currently empty!</h4>
          <div className={classes.FamilyPng}></div>
          <Link className={classes.btn} to={"/"}>
            <button>Return to Shop</button>
          </Link>
          <p>
            Before proceed to checkout you must add some products to your
            shopping cart. You will find a lot of interesting products on our
            "Home" page.
          </p>
        </div>
      )}
      {wantedItems.length > 0 && (
        <>
          <SectionText value={"Shoppin Cart"}></SectionText>
          <div className={classes.cart_items}>
            {wantedItems.map((item, index) => (
              <CartItem
                key={item.id}
                deviceAmountHandler={deviceAmountHandler}
                item={item}
              ></CartItem>
            ))}

            <Checkout wantedItems={wantedItems} />
          </div>
        </>
      )}
    </section>
  );
}

export default ShoppingCart;
