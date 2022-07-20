import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../../../2Redux/Cart/reducer';
import { Choice } from './CoiceProduct/Choice';
import classNames from 'classnames';
import Grey from './color/grey.svg'
import Black from './color/black.svg'
import Green from './color/green.svg'
import style from './ProductPage.module.scss'


export const ProductPage = () => {
  const product = useSelector(state => state.product.currentProduct);
  const sizeType = ['XS', 'S', 'M', 'L']
  const colorType = [{ src: Grey }, { src: Black }, { src: Green }]


  const [size, setSize] = React.useState(product.size[1])
  const [color, setColor] = React.useState(product.color[1])

  const dispatch = useDispatch()
  
  if (!product) return "";

  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setItemInCart(product))
  }

  const onSizeType = (index) => {
    setSize(index)
  }
  const onColorType =(index)=>{
    setColor(index)
  }

console.log(product.title, product.size, product.color)

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
                {sizeType.map((type, index) => <li key={type} onClick={() => onSizeType(index)} className={size === index ? style.active : ''}>{type}</li>)}
                {/* {sizeType.map((type, index) => <li key={type} onClick={() => onSizeType(index)} className={classNames({active : size ===index})}>{type}</li>)} */}
              </ul>
            </div>
            <div className={style.color}>
              <h3>COLOR</h3>
              <div className={style.manyColor}>
                {colorType.map((type,index) => <img onClick={() => onColorType(index)} className={color === index ? style.active : ''} src={type.src} alt='color'/>)}
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


