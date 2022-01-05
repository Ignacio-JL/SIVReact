import React, {useState, useEffect} from 'react'
import { getProductos } from '../helpers/mock';
import ItemList from './ItemList'

function ItemListContainer(props) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductos
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [])


    return (
        <div>
            <center>
                <h2>Bienvenido a {props.tienda}</h2>
            </center>
            <ItemList productos={productos} loading={loading}/>
        </div>
    )
}

export default ItemListContainer
