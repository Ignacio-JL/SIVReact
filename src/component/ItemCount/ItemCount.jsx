import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';




function ItemCount() {
    const [count, setCount] = useState(1);
    let stock = 10;

    const btnContador = () =>{
        if(count<stock){
            setCount(count+1);
        }
        else{
            alert('Stock Maximo');
        }
    }
    const btnContadorNot = () =>{
        if(count>=1){
            setCount(count-1);
        }
        else{
            alert('La cantidad no puede ser menor a 0');
        }
    }

    return (
        <div>
            <center>
                <Button variant="primary" onClick={btnContadorNot}>-</Button><span style={{paddingLeft: 10, paddingRight: 10}}>{count} Pack</span><Button variant="primary" onClick={btnContador}>+</Button>
            </center>
            
        </div>
    )
}

export default ItemCount
