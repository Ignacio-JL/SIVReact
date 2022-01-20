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
            {
                loading ? 
                <h2>Cargando ...</h2>
                :
                <ItemList productos={productos}/>

            }
        </div>
    )
}

export default ItemListContainer
