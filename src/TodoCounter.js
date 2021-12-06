import React from "react";
import './css/TodoCounter.css';

// Requerimos los parametros total y completed para usarlos en el contador
function TodoCounter({total, completed}) {
    return (
        <h2 className="TodoCounter"> Has completado {completed} de {total} TODOs</h2>
    )
}

// De esta manera podemos exportar elementos especificos del archivo
// sin tener que usar default
export { TodoCounter };