import React from "react";
import IMG from '../../../../icons/stock.svg'
import style from "./ProductModal.module.scss";

export const ProductModal = ({active, setActive}) => {
  return (
    <div className={style.containerModal} onClick={()=>{setActive(!active)}}>
      <div className={style.OrderModal}>
        <div className={style.discription}>
          <h2>SORRY !</h2>
          <p>PRODUCT IS OUT OF STOCK</p>
        </div>
        <img src={IMG} alt="emptyCart" />
      </div>
    </div>
  );
};
