import React from 'react'
import {BsCartPlusFill} from 'react-icons/bs'
import { useCartContext } from '../context/cartContext'


function CartWidget() {
    const {itemsCart} = useCartContext();
    return (<>

                <BsCartPlusFill />
                {
                    itemsCart()!== 0?
                    <span>{itemsCart()} </span>
                    : null
                    
                }
            </>
    )
}

export default CartWidget
