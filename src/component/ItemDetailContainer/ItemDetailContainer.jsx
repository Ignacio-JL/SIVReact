import React,{ useEffect, useState } from 'react'
import { getProductos } from '../../helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail';


function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({});
    useEffect(() => {
        getProductos
            .then(resp => setProducto(resp.find(prod => prod.id === 1)));
    }, []);

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
