import React from "react";
import './css/CreateTodoButton.css'

function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        alert(msg);
    }
    return (
        <button 
            className="CreateTodoButton"
            // Agregamos el atributo onClick para escuchar eventos en javascript
            // se envia una funcion flecha para que se ejecute en el momento del evento
            onClick={() => onClickButton('Modal prueba')}
            >
                +
        </button>
    );
}

export { CreateTodoButton };