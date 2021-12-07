import React from "react";
import '../css/TodoList.css';

// props.children trae todas las propiedades de los elementos hijos dentro del mismo componente
function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };