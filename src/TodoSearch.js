import React,  { useState } from "react";
import './css/TodoSearch.css';


function TodoSearch() {
    // El estado de uso nos permite cambiar el valor de una variable cuando se requiera
    // En este caso searchValue es el nombre que escogimos para el valor inicial que será ''
    // setSearchValue es el nuevo valor que se le dará a searchValue cuando lo necesitemos
    const [searchValue, setSearchValue] = React.useState('');  
    // Al agregar el atributo onchange a nuestro input, podemos traer informacion del evento
    // Y usarla en nuestra funcion, en este caso nos traemos el target con su value
    // Estas opciones aparecen al mandar el event a la consola, en google chrome puedes ver mas acerca de eventos al dispararlos
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        // Usamos la misma informacion del event para modificar el valor de searchValue
        setSearchValue(event.target.value);
    };
    
    return [
    <input 
        className="TodoSearch" 
        placeholder="Que debes hacer hoy?" 
        // A medida que cambie searchValue, ese valor se asignara a este input
        value={searchValue}
        // El evento onChange ejecuta nuestra funcion sin enviarle parametros
        onChange={onSearchValueChange}
        />,
        // Y lo renderizamos para visualizar su cambio
        <p>{searchValue}</p>
    ];        
}

export { TodoSearch };