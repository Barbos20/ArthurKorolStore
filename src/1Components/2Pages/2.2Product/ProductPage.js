import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedProductsList,
  selectSelectedProductsList,
  setCurrentProductColor,
  setCurrentProductSize,
} from "../../../2Redux/Product/reducer";
import { Choice } from "./CoiceProduct/Choice";

import style from "./ProductPage.module.scss";

export const ProductPage = () => {
  const product = useSelector((state) => state.product.currentProduct);
  const selectedProducts = useSelector(selectSelectedProductsList);

  const sizeType = product.sizes?.list;

  const [size, setSize] = useState(1);

  const dispatch = useDispatch();

  if (!product) return "";

  const addProduct = (e) => {
    e.stopPropagation();
    dispatch(setSelectedProductsList(product));
  };

  const changeSize = (value) => {
    dispatch(setCurrentProductSize({ value }));
  };
  const changeColor = (value) => {
    dispatch(setCurrentProductColor({ value }));
  };

  return (
    <div className={style.page}>
      <div className={style.description}>
        <div className={style.img}>
          <Choice key={product.id} />
        </div>
        <div className={style.info}>
          <div className={style.firm}>
          {product.firmProduct}
          </div>
          <div className={style.name}>
          {product.nameProduct}
          </div>
          
          <div className={style.attributes}>
            <div className={style.size}>
              <h3>SIZE:</h3>
              <ul>
                {product.sizes.list.map((type, index) => (
                  <li
                    key={index}
                    onClick={() => changeSize(type)}
                    className={
                      product.sizes?.currentValue === type ? style.active : ""
                    }
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
                {product.colors.list.map((type, index) => (
                  <img
                    key={index}
                    onClick={() => changeColor(type)}
                    className={
                      product.colors?.currentValue === type ? style.active : ""
                    }
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
