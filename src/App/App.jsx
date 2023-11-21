import React from 'react';
import './App.css';
import ListInput from './Listinput';
import List from './List';

const productos =[
    {done:true, text:'Patatas'},
    {done:false, text:'Naranjas'},
    {done:false, text:'Platanos'},
    {done:false, text:'Cebollas'},
];

//defino mi componente App
//Separo los componentes ahora añadiendo un componente que se llama ListInput
//Separo los componentes ahora añadiendo un componente que se llama List, le paso como props el array definiendo en la parte superior
const App = () => (
    <div className='app'>
      <h1>Lista de la compra</h1>      
      <ListInput />
      <List productos={productos} />
      <button  type="button" className='wish-clear'>Compra realizada</button>
    </div>
);
    //<div>Hola Mundo</div>;

export default App;