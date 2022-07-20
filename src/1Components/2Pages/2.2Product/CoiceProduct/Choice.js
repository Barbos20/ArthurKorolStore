import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import SP from '../../../../icons/imgElements/img1.png'
import style from './Choice.module.scss'

export const Choice = () => {
  const product = useSelector(state => state.product.currentProduct);
  // const images = [{ src: product.image }, { src: SP }, { src: product.image  }];
  const images = [{ src: product.image }, { src: product.image }, { src: product.image }];
  const [select, setSelect] = useState({ src: product.image });
  return (
    <div className={style.container}>
      <div className={style.choice}>
        {images.map((pic) => {
          return (
            <img
              alt='img'
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
  )
}


