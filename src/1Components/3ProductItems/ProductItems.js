import React from 'react'
import style from './ProductItems.module.scss'
import { ProductIMG } from '../4ProductIMG/ProductIMG'
import { BtnBuy } from '../5BtnBuy/Price'
import { Btn } from '../5BtnBuy/Btn'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../2Redux/Cart/reducer'
import { useNavigate } from 'react-router-dom'
import { setCurrentProduct } from '../../2Redux/Product/reducer'
import { RoutesPath } from '../../4RoutesPath/RoutesPath'

export const ProductItems = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(setItemInCart(product))
    }
    const openProduct = (e) => {
        e.stopPropagation()
        dispatch(setCurrentProduct(product))
        navigate(RoutesPath.product)
    }

    return (
        <div className={style.productContainer}>
            <div className={style.projectIcon} onClick={openProduct}>
                <ProductIMG image={product.image} />
            </div>
            <div className={style.circleIcon}>
                <Btn onClick={handleClick} />
            </div>
            <div className={style.productInfo}>
                <h3 className={style.title}>{product.title}</h3>
                <span className={style.price}>
                    <BtnBuy product={product} />
                </span>
            </div>


        </div>
    )
}
