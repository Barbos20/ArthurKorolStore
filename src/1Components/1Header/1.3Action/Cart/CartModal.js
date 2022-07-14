import React from 'react'
import { calcTotalPrice } from '../../../../3Untils/Untils'
import { Btn } from '../../../5BtnBuy/Btn'
import { ItemInCart } from '../ItemInCart/ItemInCart'
import { CartItem } from './CartItem'
import style from './CartModal.module.scss'


export const CartModal = ({ items, active, setActive}) => {
    return (
        <div className={style.container} onClick={()=>{setActive(!active)}}>
            <div className={style.cartModal}onClick={(e)=>{e.stopPropagation()}}>
                <div className={style.items}>
                    <h1>My Bag,</h1>
                    <p>1 item</p>
                </div>
                <div className={style.item}>
                    <div className={style.title}>
                        {
                            items.length > 0 ? items.map(product => <CartItem key={product.title} image={product.image} price={product.price} title={product.title} id={product.id} />) : null
                        }
                    </div>
                    {/* <div className={style.image}>
                        {
                            items.length > 0 ? items.map(product => product.image) : ''
                        }
                    </div> */}
                </div>
                <div className={style.description}>
                    <div className={style.price}>
                        <h1 className={style.total}>Total</h1>
                        <h1 className={style.sum}>${calcTotalPrice(items)}</h1>
                    </div>
                    <div className={style.button}>
                        {/* <NavLink to={"/cart"} className={style.button1} onClick={()=>props.setActiveModal(false)}>VIEW BAG</NavLink> */}
                        <button className={style.button1}>VIEW BAG</button>
                        {/* <button className={style.button2} onClick={()=>props.setActiveModal(false)}>CHECK OUT</button> */}
                        <button className={style.button2}>CHECK OUT</button>
                    </div>
                    <div>
                        {/* {
                            items.length > 0 ? <div>
                                {calcTotalPrice(items)}
                                <Btn onClick={onClick}>оформить </Btn>
                            </div> : ''
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}
