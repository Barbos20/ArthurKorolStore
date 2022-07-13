import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../../../../IMG/icons/CircleIcon.svg'

export const CartModal = () => {
  const [activeModal, setActiveModal] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = items.reduce((acc, product) => acc += product.price, 0)
  return (
    <div>
      <img src={EmptyCart} onClick={() => { setActiveModal(!activeModal) }} alt='cart'/>
      <span>{totalPrice}</span>
    </div>
  )
}
