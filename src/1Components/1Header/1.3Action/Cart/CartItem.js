import React, { useState } from "react";
import Grey from "../../../../1Components/2Pages/2.2Product/color/grey.svg";
import Black from "../../../../1Components/2Pages/2.2Product/color/black.svg";
import Green from "../../../../1Components/2Pages/2.2Product/color/green.svg";
import style from "./CartItem.module.scss";
import { useSelector } from "react-redux";

export const CartItem = ({ key, image, price, title, id }) => {
  const cartItem = useSelector((state) => state.product.currentProduct);
  // const obj = useSelector(state => state.)
  const sizeType = ["XS", "S", "M", "L"];
  const colorType = [{ src: Grey }, { src: Black }, { src: Green }];

  const [size, setSize] = React.useState(2);
  const [color, setColor] = React.useState(2);

  const onSizeType = (index) => {
    setSize(index);
  };
  const onColorType = (index) => {
    setColor(index);
  };

  return (
    <div className={style.container}>
      <div className={style.description}>
        <div className={style.title}>{cartItem.title}</div>
        <div className={style.price}>
          {/* {price.toFixed(2)}  */}
          {cartItem.price}
        </div>
        <div className={style.atributes}>
          <div className={style.size}>
            <h3>Size:</h3>
            <ul>
              {sizeType.map((type, index) => (
                <li
                  key={type}
                  onClick={() => onSizeType(index)}
                  className={size === index ? style.active : ''}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.color}>
            <h3>Color:</h3>
            <div className={style.manyColor}>
              {colorType.map((type, index) => (
                <img
                  onClick={() => onColorType(index)}
                  className={color === index ? style.active : ''}
                  src={type.src}
                  alt="color"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.quantity}>
        <button onClick={() => null}>+</button>
        <div>1</div>
        <button onClick={() => null}>
          <div className={style.minus}>-</div>
        </button>
      </div>
      <div className={style.image}>
        <img alt="img" src={cartItem.image} className={style.img} />
      </div>
    </div>
  );
};
