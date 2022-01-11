import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'
function Item({p}) {
    return (
        <div className='col-md-4'>
            <div className="card-header">{p.name}</div>
            <div className="card-body">
                <img src={p.imgUrl} alt='' className='w-50' />
                <div>
                    $ {p.price} c/u
                </div>
                <div className='card-price'>
                    Pack completo $ {p.price * p.sizeTotal}
                </div>
            </div>
            <div className="card-footer">
                <Link to={`/detail/${p.id}`}>
                    <button className='btn btn-outline-primary btn-block'>Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item
