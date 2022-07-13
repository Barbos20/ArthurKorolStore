import React from 'react'
import CircleIcon from '../../IMG/icons/cart.svg'
import style from './Btn.module.scss'

export const Btn=({onClick,type,children,size='s'})=>{
  return (
    <img src={CircleIcon} onClick={onClick} className={style.Btn} alt='btn'>
{children}
        </img>
  )
}
