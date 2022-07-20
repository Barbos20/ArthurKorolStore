import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductIMG } from '../../../4ProductIMG/ProductIMG'
import style from './OrderItem.module.scss'



export const OrderItem = ({ product }) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const dispatch = useDispatch()
const plus = ()=>{
    
}
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
                    <div className={style.btn} onClick={plus}>+</div>
                    <div>1</div>
                    <div className={style.btn} onClick={() => null}><div className={style.minus}>-</div></div>
                </div>
                <div className={style.IMG}><ProductIMG image={product.image} /></div>
            </div>
        </div>
    )
}


