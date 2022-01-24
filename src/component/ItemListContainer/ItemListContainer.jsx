import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../helpers/mock';
import ItemList from './ItemList/ItemList';
import { css } from '@emotion/react';
import ClockLoader from 'react-spinners/ClockLoader';
import { collection, doc, getDocs, getDoc, getFirestore, query } from 'firebase/firestore';

function ItemListContainer(props) {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();
    const [loading, setLoading] = useState(true);
    const  override  =  css`
    display: block;
    margin: 0;
    border-color: #39CEAF;
  `;


//   const [producto, setProducto] = useState({});//Ejemplo para un solo producto

    useEffect(() => {
        const db = getFirestore(); //Enlace con firebase
        const queryCollection = query(collection(db, 'items')); //consulta collecion
        // const queryProd = doc(db, 'items', 'id');//consulta uno solo
        // getDoc().then(resp => setProducto({id: resp.id, ...resp.data()}))
        getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(prod =>  ({ id : prod.id, ...prod.data() }) )))
            .catch(err => err)
            .finally(setLoading(false));


        // if(category){
        //     getProductos
        //         .then(resp => setProductos(resp.filter(prod => prod.category === category)))
        //         .catch(err => console.log(err))
        // }
        
        // else{
        //             getProductos
        //         .then(resp => setProductos(resp))
        //         .catch(err => console.log(err))
        // }

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
