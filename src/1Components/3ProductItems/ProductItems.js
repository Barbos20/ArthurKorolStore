import React from "react";
import style from "./ProductItems.module.scss";
import { ProductIMG } from "../4ProductIMG/ProductIMG";
import { BtnBuy } from "../5BtnBuy/Price";
import { Btn } from "../5BtnBuy/Btn";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../4RoutesPath/RoutesPath";
import { currentCurrency } from "../../2Redux/Product/reducer";
import { useSelector } from "react-redux";

export const ProductItems = ({ product, handleOpenProduct }) => {
  
  const navigate = useNavigate();

  const openProduct = () => {
    handleOpenProduct();
    navigate(RoutesPath.product);
  };

  return (
    <div className={style.productContainer}>
      <div className={style.projectIcon} onClick={openProduct}>
        <ProductIMG image={product.image} />
      </div>
      <div className={style.circleIcon}>
        <Btn onClick={openProduct} />
      </div>
      <div className={style.productInfo}>
        <h3 className={style.title}>{product.firmProduct}{product.nameProduct}</h3>
        <div className={style.price}>
          
          <BtnBuy product={product} />
        </div>
      </div>
    </div>
  );
};
