import React, { useState } from "react";
import PropTypes from "prop-types";

//componente para crear nuevos productos de la lista de la compra
//este componente tiene una props
//callback evento que se va a lanzar cuando el nuevo producto se haya creado, se va a llamar nuevoProducto, se llama cuando se pulsa el enter evento onkeyup
const ListInput = ({onNewProducto}) =>{
     //definimos una variable de estado del componente, hook useState
    const [newProductoText, setNewProductoText] =  useState('');  
    return(
      <fieldset className='wish-imput'>
        <legend className='wish-imput__label'>Nueva Compra</legend>
        <input 
            className="wish-input_field" 
            size="35" 
            placeholder="Introduce producto a comprar" 
            value={newProductoText} 
            onChange={e => setNewProductoText(e.target.value)}
            onKeyUp = {(e) => {
                if (e.key === 'Enter' && newProductoText.length){
                    onNewProducto({done:false, text: newProductoText});
                    setNewProductoText('');
                }
            }}
        />
      </fieldset>
    );
};

//lo declaramos para la validacion de propiedades
ListInput.propTypes = {
    onNewProducto: PropTypes.func,
};
ListInput.defaultProps = {
    onNewProducto: ()=>{},
};

export default ListInput;