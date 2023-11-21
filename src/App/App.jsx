import React from 'react';
import classNames from 'classnames';
import './App.css';

const productos =[
    {done:true, text:'Patatas'},
    {done:false, text:'Naranjas'},
    {done:false, text:'Platanos'},
    {done:false, text:'Cebollas'},
];

//defino mi componente App
//className de la linea 31 es una funcion que toma como primer parametro una estatica y el siguiente parametro es la del modificador es condicional, la clase y el valor que se tiene que dar para que se aplique
//El mapa se podria haber definido de esta forma:
//<li key={text} className={classNames(
//    'wish-list_item',
//    ${done ? 'wish-list__item--done':''}`}>
//imput...

const App = () => (
    <div className='app'>
      <h1>Lista de la compra</h1>      
      <fieldset className='wish-imput'>
        <legend className='wish-imput__label'>Nueva Compra</legend>
        <input className="wish-input_field" size="35" placeholder="Introduce producto a comprar" />
      </fieldset>
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
      <button  type="button" className='wish-clear'>Compra realizada</button>
    </div>
);
    //<div>Hola Mundo</div>;

export default App;