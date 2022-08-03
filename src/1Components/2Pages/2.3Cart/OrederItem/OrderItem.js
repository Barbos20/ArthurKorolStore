import React from "react";
// import { useSelector } from "react-redux";
import { ProductIMG } from "../../../4ProductIMG/ProductIMG";
import style from "./OrderItem.module.scss";

export const OrderItem = ({ product, handleSetSize, handleSetColor }) => {
  // const items = useSelector((state) => state.product.selectedProductsList);
  const plus = () => {};
  console.log("size:", product.sizes);
  return (
    <div className={style.container}>
      <div className={style.atributes}>
        <div className={style.title}>
          <div className={style.firm}>{product.firmProduct}</div>
          <div className={style.name}>{product.nameProduct}</div>
        </div>
        <div className={style.price}>{product.price.toFixed(2)}</div>
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
                src={type.src}
                alt="color"
              />
            ))}
          </div>
        </div>
      </div>
      <div className={style.view}>
        <div className={style.quantity}>
          <div className={style.btn} onClick={plus}>
            +
          </div>
          <div>1</div>
          <div className={style.btn} onClick={() => null}>
            <div className={style.minus}>-</div>
          </div>
        </div>
        <div className={style.IMG}>
          <ProductIMG image={product.image} />
        </div>
      </div>
    </div>
  );
};
