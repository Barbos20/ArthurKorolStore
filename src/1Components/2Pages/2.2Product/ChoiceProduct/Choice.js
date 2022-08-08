import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Choice.module.scss";

export const Choice = (id) => {
  const product = useSelector((state) => state.product.currentProduct);
  const [select, setSelect] = useState(product.changeImage[0]);

  return (
    <div className={style.container}>
      <div className={style.choice}>
        {product.changeImage.map((pic) => {
          return (
            <img
              key={id}
              alt="img"
              src={pic.src}
              className={style.Img}
              onClick={() => {
                setSelect(pic);
              }}
            />
          );
        })}
      </div>
      <img src={select.src} alt="IMG" className={style.img} />
    </div>
  );
};
