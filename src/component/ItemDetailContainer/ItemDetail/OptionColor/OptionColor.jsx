import React from 'react'
import { useState } from 'react';
import SelectComponent from '../SelectComponent/SelectComponent';
//Reemplazar por obtener colores desde productos.
const colors = [
    {value: "rojo", name:"Rojo"},
    {value: "blanco", name:"Blanco"},
    {value: "negro", name:"Negro"}
];
function OptionColor() {

    const [option, setOption] = useState('rojo');

    const optionSelected = value =>{
        setOption(value);
    }

    return (
        <div>
            <SelectComponent colors={colors} optionSelected={optionSelected}/>
        </div>
        
    )
}

export default OptionColor
