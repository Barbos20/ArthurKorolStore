import React, { useState } from 'react'
import style from './CartItem.module.scss'

export const CartItem = ({ key, image, price, title, id }) => {
    return (
        <div className={style.container}>
            <div className={style.description}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.price}>
                    {price.toFixed(2)}
                </div>
                <div className={style.size}></div>
                <div className={style.color}></div>
            </div>
            <div className={style.quantity}>
                <button onClick={()=>null}>+</button>
                <div>1</div>
                <button onClick={()=>null}><div className={style.minus}>-</div></button>
            </div>
            <div className={style.image}>
                <img alt='img' src={image} className={style.img}/>
            </div>
        </div>
    )
}


