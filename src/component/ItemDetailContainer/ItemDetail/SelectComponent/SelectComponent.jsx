import React from 'react'

function SelectComponent({colors, optionSelected}) {
    return (
        <select name="colors" id="colors" onChange={(evt) => optionSelected(evt.target.value)}>
            {
                colors.map((color) => 
                    <option key={color.name} value={color.value}>{color.name}</option>)
                
            }

        </select>
    )
}

export default SelectComponent
