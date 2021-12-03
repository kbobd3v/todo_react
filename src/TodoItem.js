import React from "react";
import './css/TodoItem.css';

function TodoItem(props) {
  
  // Generamos una alerta que concatene el texto de la propiedades que se definen TodoList
  const onComplete = () => {
    alert('Ya completaste el todo ' + props.text);
  };
  
  const onDelete = () => {
    alert('Borraste el todo ' + props.text);
  }
    return (
      <li className="TodoItem">
          {/* Le asignamos la clase icon, pero si la propiedad completed is true, cambia a icon-check--active */}
        <span
         className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
         // Recuerda si envias parametros para la funcion que llamaras en el atributo
         // Debes llamar la funcion dentro de arrow function para que no se ejecute
         onClick={onComplete}
         >
          √
        </span>
        {/* Le asignamos la clase TodoItem a la tag p, si la propiedad completed is true cambia TodoItem-p-complete y agrega el line-through */}
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span
        className="Icon Icon-delete"
        onClick={onDelete}
        >
          X
        </span>
      </li>
    );
  }
  
  export { TodoItem };