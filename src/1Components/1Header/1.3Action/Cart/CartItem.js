import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentCurrency,
  setDecrementCount,
  setIncrementCount,
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
    dispatch(setIncrementCount({id,colors,sizes}));
  };
  const handleMinusCount = () => {
    dispatch(setDecrementCount({id,colors,sizes}));
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
                <img
                  key={index}
                  onClick={() => handleSetColor(type)}
                  className={type === colors.currentValue ? style.active : ""}
                  src={type}
                  alt="color"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.quantity}>
        <button
          onClick={handlePlusCount}
        >
          +
        </button>
        <div>{count}</div>
        <button
          onClick={handleMinusCount}
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
