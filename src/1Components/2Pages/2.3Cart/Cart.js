import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice } from "../../../3Untils/Untils";
import { OrderItem } from "./OrederItem/OrderItem";
import style from "./Cart.module.scss";
import { setColor, setSize } from "../../../2Redux/Product/reducer";

export const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.product.selectedProductsList);
  if (items.length < 1) {
    <h1>THE CART IS EMPTY</h1>;
  }

  const handleSetColor = (id, value) => {
    dispatch(setColor({ id, value }));
  };
  const handleSetSize = (id, value) => {
    dispatch(setSize({ id, value }));
  };

  return (
    <div className={style.cart}>
      <h1>CART</h1>
      <div className={style.description}>
        <div>
          {items.map((product) => (
            <OrderItem product={product} handleSetColor={handleSetColor} handleSetSize={handleSetSize} />
          ))}
        </div>
        <div className={style.price}>
          <div className={style.behind}>
            <p>Tax 21%:</p>
            <p>Quantity:</p>
            <p>Total:</p>
          </div>
          <div className={style.sum}>
            <p>{(calcTotalPrice(items) * 0.21).toFixed(2)}</p>
            <p>{items.length}</p>
            <p>{calcTotalPrice(items)}</p>
          </div>
        </div>
        <button onClick={() => {}}>ORDER</button>
      </div>
    </div>
  );
};
