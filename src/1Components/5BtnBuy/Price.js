import React from 'react'
import { Btn } from './Btn'
import style from './Price.module.scss'

export const BtnBuy= ({product}) =>{
  return (
    <div>
      <span>{product.price}</span>
    </div>
  )
}
