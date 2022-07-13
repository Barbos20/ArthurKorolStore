import React from 'react'
import style from './ProductItems.module.scss'
import { ProductIMG } from '../4ProductIMG/ProductIMG'
import { BtnBuy } from '../5BtnBuy/Price'
import { Btn } from '../5BtnBuy/Btn'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../2Redux/Cart/reducer'
// import CircleIcon from '../../IMG/icons/cart.svg'

// import { NavLink } from 'react-router-dom';

export const ProductItems = ({ product }) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(setItemInCart(product))
    }
    return (
        <div className={style.productContainer}>
            {/* <NavLink to={props.path}> */}
            <div className={style.projectIcon}>
                <ProductIMG image={product.image} /> 
            </div>
            <div className={style.circleIcon}>
                {/* <img src={CircleIcon} onClick={handleClick}/> */}
                <Btn onClick={handleClick} />
            </div>
            <div className={style.productInfo}>
                <h3 className={style.title}>{product.title}</h3>
                <span className={style.price}>
                    <BtnBuy product={product} />
                </span>
            </div>

            {/* </NavLink> */}
        </div>
    )
}
