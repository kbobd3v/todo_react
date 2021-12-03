import React from "react";
import './css/TodoSearch.css';


function TodoSearch() {
    // Al agregar el atributo onchange a nuestro input, podemos traer informacion del evento
    // Y usarla en nuestra funcion, en este caso nos traemos el target con su value
    // Estas opciones aparecen al mandar el event a la consola, en google chrome puedes
    // Ver mas informacion acerca de estos eventos al dispararlos
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };
    
    return (
        <input 
        className="TodoSearch" 
        placeholder="Que debes hacer hoy?" 
        // El evento onChange ejecuta nuestra funcion si enviarle parametros
        onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };