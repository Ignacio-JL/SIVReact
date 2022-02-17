import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'

export default function Contact() {
    const [dataForm, setDataForm] = useState('');
    const db = getFirestore();

    async function consulta(e){
        e.preventDefault();
        const queryOrder = doc(db, 'ordenes', dataForm);
        await getDoc(queryOrder)
            // .then(resp => document.getElementById('rta').innerHTML=`El estado de tu pedido es: ${resp.data().id}`);
            .then(resp => document.getElementById('rta').innerHTML=`El estado de tu pedido es: ${resp.data().status}`)
            .catch(() => document.getElementById('rta').innerHTML=`Ocurrio un error, ingresa correctamente el id`);
    }

    function handleChange(e){
        setDataForm(
            e.target.value
        )
    }
    
    return (
    <div>
        <p>
            Estamos ubicados en Bacacay 3474, Galería Las Chozas entre Emilio Lamarca y Concordia.
        </p>
        <p>
            Horarios de atención
        </p>
        <p>
            Lunes a Viernes de 08hs a 19hs.
        </p>
        <p>
            Sabados de 09hs a 13:30hs.
        </p>
        <p>
            Numero +549 1170969187
        </p>
        <h3>Consulta tu pedido ingresando el id de tu pedido</h3>

        <form onSubmit={consulta}>
            <div>
                <input type="text" name='consulta' onChange={handleChange} placeholder='Id de pedido' value={dataForm.value} required/>
            </div>
            <button className='btn btn-outline-success mt-2'>Consultar Orden</button>
        </form>
        <div id='rta'></div>
    </div>
  )
}
