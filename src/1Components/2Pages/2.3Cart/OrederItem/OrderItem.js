import React from 'react'
import { useSelector } from 'react-redux'
import { ItemInCart } from '../../../1Header/1.3Action/ItemInCart/ItemInCart'
import {ProductIMG} from '../../../4ProductIMG/ProductIMG'
import style from './OrderItem.module.scss'



export const OrderItem = ({product}) => {

  return (
    <div className={style.container}>
      <div className={style.atributes}>
        <div className={style.title}>{product.title}</div>
        <div className={style.price}>{(product.price).toFixed(2)}</div>
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
      </div>
      <div className={style.view}>
      <div className={style.quantity}>
                <button onClick={()=>null}>+</button>
                <div>1</div>
                <button onClick={()=>null}><div className={style.minus}>-</div></button>
            </div>
        <div className={style.IMG}><ProductIMG image={product.image} /></div>
      </div>
    </div>
  )
}


