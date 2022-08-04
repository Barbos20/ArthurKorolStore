import React from "react";
import style from "./EmptyCart.module.scss";
import emptyCart from "../../../../icons/emptyCart.svg";

export const EmptyCart = () => {
  return (
    <div className={style.container}>
      <div className={style.description}>
        <div>oops...</div>
        <div>your cart is empty</div>
      </div>
      <img src={emptyCart} alt="emptyCart" />
    </div>
  );
};
