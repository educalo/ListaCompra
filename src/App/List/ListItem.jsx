import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


//establezco una variable de estado para controlar la antiguedad del producto añadido a la lista de la compra
//la antiguedad por defecto es 0
//useEffect contiene como primer parametro un callback que se va a ejecutar tantas veces como se renderice este componente
//useEffect como segundo parametro se añaden las dependencias, cuando esos valores cambien se ejecute el callback, en nuestro caso es done
//ageInterval es un temporizador
//la funcion setInterval se va a ejecutar cada 1000ms
//return () => clearInterval(ageInterval); se utiliza como funcion destructora
const ListItem = ({
  done, text, id, onDoneChange,
}) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge(a => a + 1);
        }
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [done]);

  return (
    <li
    //esta es la logica que queremos controlar, dependiendo de una condicion se aplica una clase u otra  
    className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 5 && age < 10,
        'wish-list__item--danger': age >= 10,
      })}
    >
      <input
        id={id}
        type="checkbox"
        checked={!!done}
        onChange={e => onDoneChange(e.target.checked)}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};
ListItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};
ListItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};
export default ListItem;