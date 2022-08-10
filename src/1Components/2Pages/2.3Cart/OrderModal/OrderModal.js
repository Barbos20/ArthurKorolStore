import React from "react";
import { useSelector } from "react-redux";
import accepted from "../../../../icons/accepted.svg";
import emptyCart from "../../../../icons/emptyCart.svg";
import style from "./OrderModal.module.scss";

export const OrderModal = ({ active, setActive, close }) => {
  const items = useSelector((state) => state.product.selectedProductsList);
  return (
    <div className={style.containerModal} onClick={close()}>
      {items.length >= 1 ? 
        <div className={style.OrderModal}>
        <div className={style.discription} v>
          <h2>AWESOME!</h2>
          <p>YOUR ORDER IS ACCEPTED</p>
        </div>
        <img src={accepted} alt="accepted" />
      </div> 
       : 
       <div className={style.OrderModal}>
       <div className={style.discription} >
         <h2>YOUR CART IS EMPTY !</h2>
         <p>add item to cart to complete order</p>
         </div>
         <img src={emptyCart} alt="emptyCart" />
       </div>
      }
    </div>
    
  );
};
