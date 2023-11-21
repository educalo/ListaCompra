import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//vamos a trabajar con props 
const List = ({productos}) => (
<ul className="wish-list">
        {productos.map(({done, text}, i) => (
                <li 
                    key={text} 
                    className={classNames('wish-list__item', {
                        'wish-list__item--done': done, 
                    })}
                >
                        <input id={`wish${i}`} type="checkbox" checked={done}/>
                        <label htmlFor={`wish${i}`}>{text}</label>
                </li>
            ))}        
      </ul>

);

//defino de que tipo son las props que puede recibir este componente
//shape nos permite definir una estructura de objeto
List.PropTypes ={
    productos: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool,
            text: PropTypes.string,
        })
    ),
};

List.defaultProps ={
    productos:[],
}
export default List;