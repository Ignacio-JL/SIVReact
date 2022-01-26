import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';


function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({});
    const {idDetail} = useParams();
    

    useEffect(() => {
        const db = getFirestore(); //Enlace con firebase
        const queryProd = doc(db, 'items', idDetail);//consulta uno solo
        getDoc(queryProd).then(resp => setProducto({id: resp.id, ...resp.data()}))
        
            
    }, [idDetail]);

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
