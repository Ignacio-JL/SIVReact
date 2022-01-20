import React from 'react'

import Item from '../Item/Item';

function ItemList({productos}) {

    return (
        <div>
            <center>
                
                {
                        productos.map(prod => 
                            <Item p={prod} key={prod.id}/>
                )}

            </center>
        </div>
    )
}

export default ItemList
