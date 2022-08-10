import React from "react";
import style from "./ProductItems.module.scss";
import { ProductIMG } from "../4ProductIMG/ProductIMG";
import { Btn } from "../5BtnBuy/Btn";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../4RoutesPath/RoutesPath";
import {
  currentCurrency,
  setSelectedProductsList,
} from "../../2Redux/Product/reducer";
import { useDispatch, useSelector } from "react-redux";

export const ProductItems = ({ product, handleOpenProduct }) => {
  const symbol = useSelector(currentCurrency);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openProduct = () => {
    handleOpenProduct();
    navigate(RoutesPath.product);
  };
  const addProduct = () => {
    dispatch(setSelectedProductsList(product));
  };

  return product.id === 5 ? (
    <div className={style.disabled}>
      <div className={style.projectIcon} onClick={openProduct}>
        {/* <ProductIMG image={product.image} /> */}
        <img src={product.image} alt='page'/>
        <div>OUT OF STOCK</div>
      </div>
      <div className={style.circleIcon}>
        <Btn onClick={addProduct} />
      </div>
      <div className={style.productInfo}>
        <h3 className={style.title}>
          {product.firmProduct}
          {product.nameProduct}
        </h3>
        <div className={style.price}>
          {symbol.currencySymbol}
          {product.price.toFixed(2)}
        </div>
      </div>
    </div>
  ) : (
    <div className={style.productContainer}>
      <div className={style.projectIcon} onClick={openProduct}>
        <ProductIMG image={product.image} />
      </div>
      <div className={style.circleIcon}>
        <Btn onClick={addProduct} />
      </div>
      <div className={style.productInfo}>
        <h3 className={style.title}>
          {product.firmProduct}
          {product.nameProduct}
        </h3>
        <div className={style.price}>
          {symbol.currencySymbol}
          {product.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
