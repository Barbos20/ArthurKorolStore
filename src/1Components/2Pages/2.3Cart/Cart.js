import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice } from "../../../3Utils/Utils";
import { OrderItem } from "./OrederItem/OrderItem";
import style from "./Cart.module.scss";
import { currentCurrency, setColor, setNullificationItems, setSize } from "../../../2Redux/Product/reducer";
import emptyCart from '../../../icons/emptyCart.svg'
import { calcTotalCount } from "../../../3Utils/Utils";
import { OrderModal } from "./OrderModal/OrderModal";

export const Cart = () => {
  const [isCartMenuVisicle, setIsCartMenuVisible] = useState(false);
  const symbol = useSelector(currentCurrency)
  const dispatch = useDispatch()
  const items = useSelector((state) => state.product.selectedProductsList);
  

  const handleSetColor = (id, value) => {
    dispatch(setColor({ id, value }));
  };
  const handleSetSize = (id, value) => {
    dispatch(setSize({ id, value }));
  };

const close=()=>{
  dispatch(setNullificationItems())
  setIsCartMenuVisible(false)
}

  return (
    <div className={style.cart}>
      {isCartMenuVisicle && (
        <OrderModal
        active={isCartMenuVisicle}
        setActive={setIsCartMenuVisible}
        close={()=>close}
        />
      )}
      <div className={style.description}>
      <h1>CART</h1>
        <div>
        {items.length >= 1 ? items.map((product) => (
            <OrderItem key={product.id} product={product} handleSetColor={handleSetColor} handleSetSize={handleSetSize} />
          )) : 
          <div className={style.container}>
          <div>OOPS... YOUR CART IS EMPTY !</div>
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
        <button  onClick={() => {
          setIsCartMenuVisible(true);
        }}>ORDER</button>
      </div>
      
    </div>
  );
};
