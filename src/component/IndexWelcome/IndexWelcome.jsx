import React from 'react'
import { Link } from 'react-router-dom';
function IndexWelcome({nombreTienda}) {
    return (
        <div>
            <center>
                <h2>Bienvenido a {nombreTienda}</h2>
                <div className="card-footer">
                <Link to="/products">
                    <button className='btn btn-dark btn-block'>Ver Productos</button>
                </Link>
            </div>
            </center>
        </div>
    )
}

export default IndexWelcome
