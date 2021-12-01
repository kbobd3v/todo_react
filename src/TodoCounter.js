import React from "react";

function TodoCounter() {
    return (
        <h2> Has completado 2 de 3 TODOs</h2>
    )
}

// De esta manera podemos exportar elementos especificos del archivo
// sin tener que usar default
export { TodoCounter };