import React, { useState } from "react";
import style from "./ChoicePhoto.module.scss";

export const ChoicePhoto = (product) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const pageWidth = 200;

  const handleLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageWidth;
      return Math.min(newOffset, 0);
    });
  };
  const handleRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth;
      const maxOffset = pageWidth * (pages.length - 2);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={style.window}>
      {product.changeImage.map((pic) => {
        return (
          <div
            className={style.image}
            style={{ transform: `translateX(${offset}px)` }}
          >
            <img alt="img" src={pic.src} className={style.Img} />
          </div>
        );
      })}
      <div className={style.choice}>
        <div onClick={handleLeft}>{" < "}</div>
        <div onClick={handleRight}>{" > "}</div>
      </div>
    </div>
  );
};
