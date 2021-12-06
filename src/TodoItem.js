import React from "react";
import './css/TodoItem.css';

function TodoItem(props) {

    return (
      <li className="TodoItem">
          {/* Le asignamos la clase icon, pero si la propiedad completed is true, cambia a icon-check--active */}
        <span
         className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
         // Recuerda si envias parametros para la funcion que llamaras en el atributo
         // Debes llamar la funcion dentro de arrow function para que no se ejecute
         // Al dispararse el evento onclick, se ejecuta onComplete que viene de las props
         // onComplete ejecuta la funcion flecha que cambia el atributo completed a en los todo's
         onClick={props.onComplete}
         >
          √
        </span>
        {/* Le asignamos la clase TodoItem a la tag p, si la propiedad completed is true cambia TodoItem-p-complete y agrega el line-through */}
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span
        className="Icon Icon-delete"
        // onDelete ejecuta la funcion flecha que elimina el todo del array de todo's
        onClick={props.onDelete}
        >
          X
        </span>
      </li>
    );
  }
  
  export { TodoItem };