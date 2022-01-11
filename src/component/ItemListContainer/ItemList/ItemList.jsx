import React from 'react'

import Item from '../Item/Item';

function ItemList({productos, loading}) {

    return (
        <div>
            <center>
                
                {loading ? <h2>Cargando ...</h2>
                    :
                        productos.map(prod => 
                            <Item p={prod} key={prod.id}/>
                )}

            </center>
        </div>
    )
}

export default ItemList
