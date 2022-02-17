import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import { css } from '@emotion/react';
import ClockLoader from 'react-spinners/ClockLoader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer(props) {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();
    const [loading, setLoading] = useState(true);
    const  override  =  css`
    display: block;
    margin: 0;
    border-color: #39CEAF;
  `;


    useEffect(() => {
        const db = getFirestore(); //Enlace con firebase
        if(category){
            const queryCollection = query(collection(db, 'items'), where('category', '==', category )); //consulta con where
            getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(prod =>  ({ id : prod.id, ...prod.data() }) )))
                .catch(err => err)
                .finally(setLoading(false));
        }
        else{
            const queryCollection = query(collection(db, 'items')); //consulta collecion
            getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(prod =>  ({ id : prod.id, ...prod.data() }) )))
                .finally(setLoading(false));
        }
 

    }, [category]);
    return (
        <div>
            {
                loading ?
                <>
                    <h2>Cargando ...</h2>
                    <center>
                        <ClockLoader color={'#39CEAF'} loading={loading} css={override} size={70} />
                    </center>
                </> 
                :
                <ItemList productos={productos}/>

            }
        </div>
    )
}

export default ItemListContainer
