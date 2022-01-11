import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductos } from '../../helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail';


function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({});
    const {idDetail} = useParams();
    
    useEffect(() => {
        getProductos
            .then(resp => setProducto(resp.find(prod => prod.id === idDetail)))
            .catch(err => console.log(err));
            
    }, [idDetail]);

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
