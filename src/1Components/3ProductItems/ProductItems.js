import React from 'react'
import style from './ProductItems.module.scss'
import { ProductIMG } from '../4ProductIMG/ProductIMG'
import { BtnBuy } from '../5BtnBuy/Price'
import { Btn } from '../5BtnBuy/Btn'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemOnCart, setItemInCart } from '../../2Redux/Cart/reducer'
import { ItemInCart } from '../1Header/1.3Action/ItemInCart/ItemInCart'
// import CircleIcon from '../../IMG/icons/cart.svg'
// import { NavLink } from 'react-router-dom';

export const ProductItems = ({ product }) => {
    const dispatch = useDispatch()
    // const items = useSelector(state => state.cart.itemsInCart)
    // const isItemInCart = items.some(item => item.id ===product.id)

    const handleClick = (e) => {
        e.stopPropagation()
        // if (isItemInCart) {
        //     dispatch(deleteItemOnCart(product.id))
        // } else {
        //     dispatch(setItemInCart(product))
        // }
        
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
                    {/* {isItemInCart ? 'убрать из корзины' : " в Корзину"} */}
                    <BtnBuy product={product} />
                </span>
            </div>

            {/* </NavLink> */}
        </div>
    )
}
