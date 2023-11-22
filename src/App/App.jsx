import React, { useState } from 'react';
import './App.css';
import ListInput from './Listinput';
import List from './List';

const productosIniciales =[
    {done:true, text:'Patatas'},
    {done:false, text:'Naranjas'},
    {done:false, text:'Platanos'},
    {done:false, text:'Cebollas'},
];

//defino mi componente App
//Separo los componentes ahora añadiendo un componente que se llama ListInput
//Separo los componentes ahora añadiendo un componente que se llama List, le paso como props el array definiendo en la parte superior

//definimos un nuevo hook de estado
//cuando pulso el boton me quedo con los productos no tachados, o dicho de otra manera los pendientes de comprar
const App = () => {
    const [productos, setProductos] = useState(productosIniciales)    
    return (
    <div className='app'>
      <h1>Lista de la compra</h1>     
      <ListInput onNewProducto={producto => setProductos([producto,...productos])}/>
      <List productos = {productos} onProductosChange={setProductos} />
      <button  type="button" className='wish-clear' onClick={() => setProductos(productos.filter(producto => !producto.done))}>Compra realizada</button>
    </div>
    );
    };
    //<div>Hola Mundo</div>;

export default App;