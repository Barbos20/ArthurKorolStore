import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { calcTotalPrice } from "../../../../3Untils/Untils";
import { CartItem } from "./CartItem";
import { RoutesPath } from "../../../../4RoutesPath/RoutesPath";
import {
  selectCurrentProduct,
  setColor,
  setSize,
} from "../../../../2Redux/Product/reducer";
import style from "./CartModal.module.scss";

export const CartModal = ({ key, items, active, setActive }) => {
  const counter = useSelector(selectCurrentProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openCart = useCallback(() => {
    setActive(!active);
    navigate(RoutesPath.cart);
  }, [navigate]);

  const handleSetColor = (id, value) => {
    dispatch(setColor({ id, value }));
  };
  const handleSetSize = (id, value) => {
    dispatch(setSize({ id, value }));
  };
  

  return (
    <div
      className={style.container}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div
        className={style.cartModal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={style.items}>
          <h1>My Bag,</h1>
          <p>{items.length}</p>
          <p />
          {items.length > 1 ? "items" : "item"}
        </div>
        <div className={style.item}>
          <div className={style.title}>
            {items.length > 0
              ? items.map((item) => {
                  const { id, image, price, title, sizes, colors, count } =
                    item;

                  return (
                    <CartItem
                      id={id}
                      key={id}
                      title={title}
                      price={price}
                      sizes={sizes}
                      image={image}
                      colors={colors}
                      count={count}
                      handleSetColor={(value) => {
                        handleSetColor(id, value);
                      }}
                      handleSetSize={(value) => {
                        handleSetSize(id, value);
                      }}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div className={style.description}>
          <div className={style.price}>
            <h1 className={style.total}>Total</h1>
            <h1 className={style.sum}>{calcTotalPrice(items)}</h1>
          </div>
          <div className={style.button}>
            <button className={style.button1} onClick={openCart}>
              VIEW BAG
            </button>
            <button className={style.button2}>CHECK OUT</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
