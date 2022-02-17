import React from 'react'
import { useState } from 'react';
import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';
import { useCartContext } from '../../../context/cartContext';
import ItemCount from './../../ItemCount/ItemCount';
import OptionColor from './OptionColor/OptionColor';

function ItemDetail({producto, loading}) {

    const {addToCart} = useCartContext();
    const [isCart, setIsCart] = useState(false);
    
    const  override  =  css`
    display: block;
    margin: 50px;
    border-color: #39CEAF;
  `;
    const onAdd = (cant) =>{
        setIsCart(true);
        addToCart({...producto, quantity: cant});
    }


    return (
        <center>
            {
                loading ?
                    <>
                        <center>
                            <BarLoader color={'#39CEAF'} loading={loading} css={override} size={100} />
                        </center>
                    </> 
                        :
                    <>
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
                    </>
            }
        </center>
    )
}

export default ItemDetail
