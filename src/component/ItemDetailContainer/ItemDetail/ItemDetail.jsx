import React from 'react'

function ItemDetail({producto}) {
    return (
        <center>
            <h3>{producto.name} ({producto.category})</h3>
            <div className='col-md-6'>
                <li>{producto.material}</li>
                <li>Talles {producto.sizeMin} a {producto.sizeMax}</li>
                <li>Precio c/u $ {producto.price}</li>
                <li>Precio pack completo $ {producto.price * producto.sizeTotal}</li>
                <img src={producto.imgUrl} alt='' className='w-50'/>
            </div>
        </center>
    )
}

export default ItemDetail
