import classes from "./CartItem.module.css";

function CartItem({ item, deviceAmountHandler }) {
  const minusAmount = () => {
    deviceAmountHandler(item.id, item.amount - 1);
  };
  const plusAmount = () => {
    if (item.amount < 5) {
      deviceAmountHandler(item.id, item.amount + 1);
    }
  };
  let price = item.price * item.amount;
  switch (item.memory) {
    case "64":
      price = item.price * item.amount;
      break;
    case "128":
      price = item.price * item.amount + 100;
      break;
    case "256":
      price = item.price * item.amount + 200;
      break;
  }

  return (
    <div className={classes.cart_item}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      ></div>
      <div className={classes.d_flex}>
        <div className={classes.text}>
          <h3>{`${item.name} (${item.memory}GB)`}</h3>
          <p>
            Unlimited talk, text, and data with mobile hotspot, nationwide
            coverage, and international reach. No long-term contract
          </p>
        </div>
        <div className={classes.price}>${price.toFixed(2)}</div>
        <div className={classes.amount}>
          <i
            onClick={minusAmount}
            className={`fas fa-minus-circle ${classes.minus}`}
          ></i>
          <p>{item.amount}</p>
          <i
            onClick={plusAmount}
            className={`fas fa-plus-circle ${classes.plus}`}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
