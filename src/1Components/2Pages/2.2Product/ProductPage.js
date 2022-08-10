import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedProductsList,
  setCurrentProductColor,
  setCurrentProductSize,
  currentCurrency,
  selectCurrentProduct,
} from "../../../2Redux/Product/reducer";
import { Choice } from "./ChoiceProduct/Choice";
import { ProductModal } from "./ProductModal/ProductModal";

import style from "./ProductPage.module.scss";

export const ProductPage = () => {
  const [isCartMenuVisicle, setIsCartMenuVisible] = useState(false);
  const symbol = useSelector(currentCurrency);
  const product = useSelector(selectCurrentProduct);
  const dispatch = useDispatch();

  const addProduct = (e) => {
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
          <Choice id={product.id}/>
        </div>
        <div className={style.info}>
          <div className={style.firm}>{product.firmProduct}</div>
          <div className={style.name}>{product.nameProduct}</div>

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
                    src={type}
                    alt="color"
                  />
                ))}
              </div>
            </div>
            <div className={style.price}>
              <div>
                {symbol.currencySymbol}
                {product.price.toFixed(2)}
              </div>
              {isCartMenuVisicle && (
        <ProductModal
        active={isCartMenuVisicle}
        setActive={setIsCartMenuVisible}
        />
      )}
              {product.id === 5
              ?<button onClick={() => {
                setIsCartMenuVisible(!isCartMenuVisicle);
              }}>ADD TO CART</button>
              :<button onClick={addProduct}>ADD TO CART</button>
            }
              {/* <button onClick={addProduct}>ADD TO CART</button> */}
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
