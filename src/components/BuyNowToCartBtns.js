import classes from "./componentsCss/BuyNowToCartBtns.module.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../context/UserAuthContext";

function BuyNowToCartBtns({
  activeMemory,
  deviceAmountHandler,
  selectedDevice,
}) {
  const { cartList, signedIn } = useContext(ProductsContext);

  const navigate = useNavigate();

  const addToCart = () => {
    //   const userRef = doc(db, "users", auth.currentUser.uid);

    // await updateDoc(userRef, { cart: newCart });
    deviceAmountHandler(selectedDevice.id, 1);
    navigate("/");
  };
  const toSignIn = () => {
    navigate("/sign-in");
  };
  const buyNow = () => {
    alert("I sell websites not phones");
  };
  return (
    <div className={classes.btns}>
      <div className={classes.text}>
        <p>Price</p>
        <p>
          $
          {activeMemory[1]
            ? +selectedDevice.price + activeMemory[1]
            : selectedDevice.price}
        </p>
      </div>
      <button
        onClick={signedIn ? buyNow : toSignIn}
        className={classes.buy_now}
      >
        Buy now
      </button>
      <button
        onClick={signedIn ? addToCart : toSignIn}
        className={classes.add_to_cart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default BuyNowToCartBtns;
