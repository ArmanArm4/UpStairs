import classes from "./componentsCss/BuyNowToCartBtns.module.css";

function BuyNowToCartBtns({
  activeMemory,
  deviceAmountHandler,
  selectedDevice,
}) {
  // console.log(selectedDevice.id);
  const addToCart = () => {
    deviceAmountHandler(selectedDevice.id, 1);
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
      <button className={classes.buy_now}>Buy now</button>
      <button onClick={addToCart} className={classes.add_to_cart}>
        Add to cart
      </button>
    </div>
  );
}

export default BuyNowToCartBtns;
