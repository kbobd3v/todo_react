import React from "react";
import '../css/TodoSearch.css';

// Se requieren los parametros de estado de uso de searchValue para ejecutar TodoSearch
function TodoSearch({searchValue, setSearchValue}) {
    // Al agregar el atributo onchange a nuestro input, podemos traer informacion del evento
    // Y usarla en nuestra funcion, en este caso nos traemos el target con su value
    // Estas opciones aparecen al mandar el event a la consola, en google chrome puedes ver mas acerca de eventos al dispararlos
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        // Usamos la misma informacion del event para modificar el valor de searchValue
        setSearchValue(event.target.value);
    };
    
    return (
    <input 
        className="TodoSearch" 
        placeholder="Que debes hacer hoy?" 
        // A medida que cambie searchValue, ese valor se asignara a este input
        value={searchValue}
        // El evento onChange ejecuta nuestra funcion sin enviarle parametros
        onChange={onSearchValueChange}
        />
    );        
}

export { TodoSearch };