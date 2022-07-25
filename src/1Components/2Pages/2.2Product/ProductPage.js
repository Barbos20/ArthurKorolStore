import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../../2Redux/Cart/reducer";
import { Choice } from "./CoiceProduct/Choice";
import Grey from "./color/grey.svg";
import Black from "./color/black.svg";
import Green from "./color/green.svg";
import style from "./ProductPage.module.scss";

export const ProductPage = () => {
  const product = useSelector((state) => state.product.currentProduct);
  // const sizeType = ['XS', 'S', 'M', 'L']
  const sizeType = product.sizes.list;
  // const colorType = [{ src: Grey }, { src: Black }, { src: Green }];
  const colorType = product.colors.list;

  

  const [size, setSize] = React.useState(1);
  const [color, setColor] = React.useState(0);

  const dispatch = useDispatch();

  if (!product) return "";

  const addProduct = (e) => {
    e.stopPropagation();
    const obj = {
      product,
      size: sizeType[size],
      color: colorType[color],
    };

    dispatch(setItemInCart(obj));
  };

  const onSizeType = (index) => {
    setSize(index);
  };
  const onColorType = (index) => {
    setColor(index);
  };

  return (
    <div className={style.page}>
      <div className={style.description}>
        <div className={style.img}>
          <Choice key={product.id} />
        </div>
        <div className={style.name}>
          {product.title}
          <div className={style.attributes}>
            <div className={style.size}>
              <h3>SIZE:</h3>
              <ul>
                {sizeType.map((type, index) => (
                  <li
                    key={type}
                    onClick={() => onSizeType(index)}
                    className={size === index ? style.active : ""}
                  >
                    {type}
                  </li>
                ))}
                {/* {sizeType.map((type, index) => <li key={type} onClick={() => onSizeType(index)} className={classNames({active : size ===index})}>{type}</li>)} */}
              </ul>
            </div>
            <div className={style.color}>
              <h3>COLOR</h3>
              <div className={style.manyColor}>
                {colorType.map((type, index) => (
                  <img
                    onClick={() => onColorType(index)}
                    className={color === index ? style.active : ""}
                    src={type.src}
                    alt="color"
                  />
                ))}
              </div>
            </div>
            <div className={style.price}>
              <h3>{product.price.toFixed(2)}</h3>
              <button onClick={addProduct}>ADD TO CART</button>
            </div>
            <div className={style.about}>
              <p>
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
