import React from 'react'
import style from './ProductIMG.module.scss'

export const ProductIMG = ({image=""}) => {
    return (
        <div className={style.projectIcon} style={{backgroundImage:`url(${image})`}}/>
    )
}
