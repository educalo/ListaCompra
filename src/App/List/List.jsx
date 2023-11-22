import React from "react";
import PropTypes from "prop-types";
//import classNames from "classnames";
import ListItem from "./ListItem";

//vamos a trabajar con props 
const List = ({productos,onProductosChange}) => (
    <ul className="wish-list">
        {productos.map(({text, done}, i) => (
                <ListItem
                    text = {text}
                    done = {done}
                    onDoneChange={(value) => {
                        const updateProductos = [...productos];
                        updateProductos[i].done = value;
                        onProductosChange(updateProductos);
                    }}
                    id = {`producto${i}`}
                    key = {text}
                />
        ))};
      </ul>
);

//defino de que tipo son las props que puede recibir este componente
//shape nos permite definir una estructura de objeto
List.PropTypes ={
    productos: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
    onProductosChange: PropTypes.func,
};
       
List.defaultProps ={
    productos:[],
    onProductosChange: () =>{},
};

export default List;