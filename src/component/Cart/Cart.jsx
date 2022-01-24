import React from 'react';
import './Cart.css'
import {useCartContext} from '../../context/cartContext';
import { Link } from 'react-router-dom';


function Cart() {
    const {cartList, deleteCart, removeItem, totalCart} = useCartContext();
    
    if(cartList.length === 0){
        return(
            <center>
                <h1>Tu Carrito esta vacio :C</h1>
                <Link to='/products/'><button className='btn btn-success'>Ir de compras</button></Link>
            </center>
        )
    }
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th></th>
                        <th>Cantidad</th>
                        <th>Precio (Pack)</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="col-4">
                    
                
            {
                cartList.map(prod => 
                    <tr key={prod.id}>
                        <th scope='row'>#</th>
                        <td>{prod.name}</td>
                        <td><img src={prod.imgUrl} alt=''></img></td>
                        <td>{prod.quantity}</td>
                        <td>{prod.price * prod.sizeTotal}</td>
                        <td>{(prod.price * prod.sizeTotal) * prod.quantity}</td>
                        <td><button className='btn btn-danger' onClick={()=> removeItem(prod.id)}>X</button></td>
                    </tr>
                    )
            }
                </tbody>
            </table>
            <div>
                Total: {totalCart()}
            </div>
            <button className='btn btn-outline-danger mt-2' onClick={deleteCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;
