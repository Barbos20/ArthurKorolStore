import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../../../2Redux/Cart/reducer';
import { Choice } from './CoiceProduct/Choice';
import style from './ProductPage.module.scss'


export const ProductPage = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.currentProduct);
  if (!product) return "";

const handleClick=(e)=>{
  e.stopPropagation()
        dispatch(setItemInCart(product))
}

  return (
    <div className={style.page}>
      <div className={style.description}>
        <div className={style.img}>
          <Choice />
        </div>
        <div className={style.name}>
          {product.title}
          <div className={style.attributes}>
            <div className={style.size}>
              <h3>SIZE:</h3>
              <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
              </ul>
            </div>
            <div className={style.color}>
              <h3>COLOR</h3>
              <div className={style.manyColor}>
                <div className={style.grey} />
                <div className={style.black} />
                <div className={style.green} />
              </div>
            </div>
            <div className={style.price}>
              <h3>{(product.price).toFixed(2)}</h3>
              <button onClick={handleClick}>ADD TO CART</button>
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
  )
}


