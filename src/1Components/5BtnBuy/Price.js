import React from 'react'
import { useSelector } from 'react-redux'
import { currentCurrency } from '../../2Redux/Product/reducer'
import style from './Price.module.scss'

export const BtnBuy= ({product}) =>{
  const symbol = useSelector(currentCurrency)
  return (
    <div>
      {symbol.currencySymbol}
        {product.price.toFixed(2)}
        
    </div>
  )
}
