import React from 'react'
import style from './Price.module.scss'

export const BtnBuy= ({product}) =>{
  return (
    <div>
      <span>
        {product.price.toFixed(2)}
        </span>
    </div>
  )
}
