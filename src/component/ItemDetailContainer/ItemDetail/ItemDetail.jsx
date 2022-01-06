import React from 'react'

function ItemDetail({producto}) {
    return (
        <center>
            <h3>Detalle Modal</h3>
            <div className='col-md-6'>
                <li>{producto.name}</li>
                <li>Precio $ {producto.price}</li>
                <li>{producto.material}</li>
                <li>Talles {producto.sizeMin} a {producto.sizeMax}</li>
                <img src={producto.imgUrl} alt='' className='w-50'/>
            </div>
        </center>
    )
}

export default ItemDetail
