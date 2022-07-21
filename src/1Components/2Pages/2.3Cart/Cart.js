import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../../3Untils/Untils'
import { OrderItem } from './OrederItem/OrderItem'
import style from './Cart.module.scss'

export const Cart = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  if (items.length < 1) {
    <h1>THE CART IS EMPTY</h1>
  }

  return (
    <div className={style.cart}>
      <h1>CART</h1>
      <div className={style.description}>
        <div>
          {items.map(product => <OrderItem product={product} />)}
        </div>
        <div className={style.price}>
          <div className={style.behind}>
            <p>Tax 21%:</p>
            <p>Quantity:</p>
            <p>Total:</p>
          </div>
          <div className={style.sum}>
            <p>{((calcTotalPrice(items)) * (0.21)).toFixed(2)}</p>
            <p>{items.length}</p>
            <p>{calcTotalPrice(items)}</p>
          </div>
        </div>
        <button onClick={''}>ORDER</button>
      </div>
    </div>
  )
}


