import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../../../context/cartContext';

function Order() {

    const { cartList, totalCart } = useCartContext();
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

    async function buyCart(e){
        e.preventDefault();
        let order ={};
        order.buyer= dataForm;
        order.total = totalCart();
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * (cartItem.sizeTotal * cartItem.quantity);
            const quantity = cartItem.quantity;

            return {id, name, price, quantity};
        });

        const db = getFirestore();
        const orderCollection = collection(db,'ordenes');

        await addDoc(orderCollection, order)
            .then(({id}) => document.getElementById('ordenId').innerHTML=`Tu id de orden es: ${id}`) //mostramos ID
            .catch(err => console.log(err))
            .finally(() => setDataForm({ 
                name: '',
                phone: '',
                email: ''
            }));


        //actualizacion de stock de items comprados
        const stockCollection = collection(db, 'items');

        //extraemos los id de firebase de los productos a actualizar
        const stockToUpdate = query(stockCollection, where(documentId(), 'in', cartList.map(item => item.id)));

        const batch = writeBatch(db);
        await getDocs(stockToUpdate)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
                })
            ))
            .catch(err => console.log(err));

            batch.commit();

        
        
    }

    function handleChange(e){
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
            }
        )
    }
    return  <div>
                <form onSubmit={buyCart}>
                    <div>
                        <input type='text' name='name' placeholder='Nombre' onChange={handleChange} value={dataForm.name}/>
                    </div>
                    <div>
                        <input type='number' name='phone' placeholder='Telefono' onChange={handleChange} value={dataForm.phone}/>
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='Email' onChange={handleChange} value={dataForm.email}/>
                    </div>
                    <button className='btn btn-outline-success mt-2'>Generar Orden</button>
                </form>
                <div id='ordenId'></div>
            </div>;
}

export default Order;
