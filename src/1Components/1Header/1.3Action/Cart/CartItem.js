import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentCurrency,
  setMinusItemList,
  setPlusItemList,
} from "../../../../2Redux/Product/reducer";
import style from "./CartItem.module.scss";

export const CartItem = ({
  id,
  firmProduct,
  nameProduct,
  price,
  sizes,
  colors,
  image,
  count,
  handleSetColor,
  handleSetSize,
}) => {
  const symbol = useSelector(currentCurrency);
  const dispatch = useDispatch();
  const handlePlusCount = () => {
    dispatch(setPlusItemList(id));
  };
  const handleMinusCount = () => {
    dispatch(setMinusItemList(id));
  };

  return (
    <div className={style.container}>
      <div className={style.description}>
        <div className={style.title}>
          {firmProduct}
          {nameProduct}
        </div>
        <div className={style.price}>
          {symbol.currencySymbol}
          {price.toFixed(2)}
        </div>
        <div className={style.atributes}>
          <div className={style.size}>
            <h3>Size:</h3>
            <ul>
              {sizes.list.map((type, index) => (
                <li
                  key={index}
                  onClick={() => handleSetSize(type)}
                  className={type === sizes.currentValue ? style.active : ""}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.color}>
            <h3>Color:</h3>
            <div className={style.manyColor}>
              {colors.list.map((type, index) => (
                <div
                  key={index}
                  onClick={() => handleSetColor(type)}
                  className={type === colors.currentValue ? style.active : ""}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.quantity}>
        <button
          onClick={() => {
            handlePlusCount(id);
          }}
        >
          +
        </button>
        <div>{count}</div>
        <button
          onClick={() => {
            handleMinusCount(id);
          }}
        >
          <div className={style.minus}>-</div>
        </button>
      </div>
      <div className={style.image}>
        <img alt="img" src={image} className={style.img} />
      </div>
    </div>
  );
};
