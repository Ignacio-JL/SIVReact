import React from 'react'

function Item({p}) {
    return (
        <div key={p.id} className='col-md-4'>
            <div className="card-header">{p.name}</div>
            <div className="card-body">
                <img src={p.imgUrl} alt='' className='w-50' />
                <div>
                    $ {p.price}
                </div>
            </div>
            <div className="card-footer">
                <button className='btn btn-outline-primary btn-block'>Detalle</button>
            </div>
        </div>
    )
}

export default Item
