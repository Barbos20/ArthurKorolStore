import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentCurrency, setDecrementCount, setIncrementCount } from "../../../../2Redux/Product/reducer";
import { ChoicePhoto } from "./ChoicePhoto/ChoicePhoto";
import style from "./OrderItem.module.scss";

export const OrderItem = ({ product, handleSetSize, handleSetColor }) => {
  const symbol = useSelector(currentCurrency)
  const dispatch = useDispatch()
  const handlePlusCount = () => {
    dispatch(setIncrementCount(product));
  };
  const handleMinusCount = () => {
    dispatch(setDecrementCount(product));
  };
  
  return (
    <div className={style.container}>
      <div className={style.atributes}>
        <div className={style.title}>
          <div className={style.firm}>{product.firmProduct}</div>
          <div className={style.name}>{product.nameProduct}</div>
        </div>
        <div className={style.price}>{symbol.currencySymbol}{product.price.toFixed(2)}</div>
        <div className={style.size}>
          <h3>Size:</h3>
          <ul>
            {product.sizes.list.map((type, index) => (
              <li
                key={index}
                onClick={() => handleSetSize(type)}
                className={
                  type === product.sizes.currentValue ? style.active : ""
                }
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.color}>
          <h3>COLOR</h3>
          <div className={style.manyColor}>
            {product.colors.list.map((type, index) => (
              <img
                key={index}
                onClick={() => handleSetColor(type)}
                className={
                  type === product.colors.currentValue ? style.active : ""
                }
                src={type}
                alt="color"
              />
            ))}
          </div>
        </div>
      </div>  
      <div className={style.view}>
        <div className={style.quantity}>
          <div className={style.btn} onClick={handlePlusCount}>
            +
          </div>
          <div>{product.count}</div>
          <div className={style.btn} onClick={handleMinusCount}>
            <div className={style.minus}>-</div>
          </div>
        </div>
        <div className={style.IMG}>
        {ChoicePhoto(product)}
        </div>
      </div>
     
    </div>
  );
};
