import React from "react";
import style from "./CartItem.module.scss";

export const CartItem = ({
  title,
  price,
  sizes,
  colors,
  image,
  count,
  handleSetColor,
  handleSetSize,
}) => {
  const sizeType = ["XS", "S", "M", "L"];

  const [size, setSize] = React.useState(2);

  const onSizeType = (index) => {
    setSize(index);
  };

  return (
    <div className={style.container}>
      <div className={style.description}>
        <div className={style.title}>{title}</div>
        <div className={style.price}>{price}</div>
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
        <div>{count}</div>
        <button onClick={() => null}>
          <div className={style.minus}>-</div>
        </button>
      </div>
      <div className={style.image}>
        <img alt="img" src={image} className={style.img} />
      </div>
    </div>
  );
};
