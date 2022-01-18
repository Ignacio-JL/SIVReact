import React from 'react'
import { useState } from 'react';
import ItemCount from './../../ItemCount/ItemCount';
import OptionColor from './OptionColor/OptionColor';

function ItemDetail({producto}) {

    const [isCart, setIsCart] = useState(false);
    
    const onAdd = _ =>{
        setIsCart(true);
    }

    return (
        <center>
            <h3>{producto.name} ({producto.category})</h3>
            <div className='col-md-6'>
                <li>{producto.material}</li>
                <li>Talles {producto.sizeMin} a {producto.sizeMax}</li>
                <li>Precio c/u $ {producto.price}</li>
                <li>Precio pack completo $ {producto.price * producto.sizeTotal}</li>
                <img src={producto.imgUrl} alt='' className='w-50'/>
                <OptionColor/>
                <ItemCount isCart={isCart} onAdd={onAdd}/>
                
            </div>
        </center>
    )
}

export default ItemDetail
