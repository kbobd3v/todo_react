import React from "react";
import './css/TodoItem.css';

function TodoItem(props) {
    return (
      <li className="TodoItem">
          {/* Le asignamos la clase icon, pero si la propiedad completed is true, cambia a icon-check--active */}
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
          √
        </span>
        {/* Le asignamos la clase TodoItem a la tag p, si la propiedad completed is true cambia TodoItem-p-complete y agrega el line-through */}
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete">
          X
        </span>
      </li>
    );
  }
  
  export { TodoItem };