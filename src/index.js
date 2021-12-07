import React from 'react';
import ReactDOM from 'react-dom';
// Importamos la funcion app del archivo ./app para poder usarlo en este archivo
import App from './App/index.js';
import './css/index.css';



// Llamamos al dom de react y le enviamos los componentes que
// queremos renderizar, en este caso se llama app como nuestro archivo app.js
ReactDOM.render(
    <App />,
  // Como segundo parametro de ReactDOM.render, se le envia el
  // elemento en html donde se renderizaran los componentes que enviamos
  // como convencion se usa siempre root, que tambien esta en el index.html de la carpeta public
  document.getElementById('root')
);

