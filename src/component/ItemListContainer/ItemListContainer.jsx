import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getProductos } from '../../helpers/mock';
import ItemList from './ItemList/ItemList'

function ItemListContainer(props) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        if(category){
            getProductos
                .then(resp => setProductos(resp.filter(prod => prod.category === category)))
                .catch(err => console.log(err))
                .finally(setLoading(false))
        }
        else{
                    getProductos
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(setLoading(false))
        }

    }, [category]);
    return (
        <div>
            <ItemList productos={productos} loading={loading}/>
        </div>
    )
}

export default ItemListContainer
