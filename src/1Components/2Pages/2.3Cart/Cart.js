import React from 'react'
import { useSelector } from 'react-redux'
import { ItemInCart } from '../../1Header/1.3Action/ItemInCart/ItemInCart'
import style from './Cart.module.scss'
import { OrderItem } from './OrederItem/OrderItem'

export const Cart = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  if (items.length < 1) {
    <h1>THE CART IS EMPTY</h1>
  }

  const calcTotalPrice = (items) => {
    const sum = items.length > 0 ? items.reduce((acc, product) => acc += +product.price, 0) : 0;
    return sum.toFixed(2)
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
            <p>$42.00</p>
            <p>{items.length}</p>
            <p>{calcTotalPrice}</p>
          </div>
        </div>
        <button onClick={''}>ORDER</button>
      </div>
    </div>
  )
}


