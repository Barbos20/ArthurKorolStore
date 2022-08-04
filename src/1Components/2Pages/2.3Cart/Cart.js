import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice } from "../../../3Utils/Utils";
import { OrderItem } from "./OrederItem/OrderItem";
import style from "./Cart.module.scss";
import { currentCurrency, setColor, setSize } from "../../../2Redux/Product/reducer";
import emptyCart from '../../../icons/emptyCart.svg'
import { calcTotalCount } from "../../../3Utils/Utils";

export const Cart = () => {
  const symbol = useSelector(currentCurrency)
  const dispatch = useDispatch()
  const items = useSelector((state) => state.product.selectedProductsList);
  

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
        {items.length >= 1 ? items.map((product) => (
            <OrderItem product={product} handleSetColor={handleSetColor} handleSetSize={handleSetSize} />
          )) : 
          <div className={style.container}>
          <div>OOPS... YOUR CART IS EMPTY</div>
        <img src={emptyCart} alt='emptyCart'/>
        </div>}
          
        </div>
        <div className={style.price}>
          <div className={style.behind}>
            <div>Tax 21%:</div>
            <div>Quantity:</div>
            <div>Total:</div>
          </div>
          <div className={style.sum}>
            <div>{symbol.currencySymbol}{(calcTotalPrice(items) * 0.21).toFixed(2)}</div>
            <div>{calcTotalCount(items)}</div>
            <div>{symbol.currencySymbol}{calcTotalPrice(items)}</div>
          </div>
        </div>
        <button onClick={() => {}}>ORDER</button>
      </div>
    </div>
  );
};
