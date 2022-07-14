import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../../../3Untils/Untils'
import EmptyCart from '../../../../icons/CircleIcon.svg'
import { ItemInCart } from '../ItemInCart/ItemInCart'
import { CartModal } from './CartModal'

export const CartHeader = () => {
  const [isCartMenuVisicle,setIsCartMenuVisible]=useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  return (
    <div>
      
      <img src={EmptyCart} onClick={() => {setIsCartMenuVisible(!isCartMenuVisicle)}} alt='cart'/>
      <ItemInCart quantity={items.length}/>
      {isCartMenuVisicle && <CartModal items={items} active={isCartMenuVisicle} setActive={setIsCartMenuVisible} onClick={()=>null}/>}
    </div>
  )
}
