import React from 'react'
import CircleIcon from '../../icons/cart.svg'
import style from './Btn.module.scss'

export const Btn=({onClick,children})=>{
  return (
    <div onClick={onClick} className={style.Btn} >
      <div>
        <img src={CircleIcon} alt='btn' />
      </div>
{children}
        </div>
  )
}
