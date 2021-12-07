import React from "react";
// Debe importarse con las llaves asi como exportamos en el archivo donde esta la funcion
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodobutton";
import { TodoSearch } from "../TodoSearch";

// Aqui recibimos como parametro las props que se enviaron en ./App.index.js
// Las usaremos para que la reciban tambien todos los componentes que las usan
function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
  return (
    // Cada componente de react solo soporta que le enviemos una etiqueta por componente
    // Con la etiqueta React Fragment podemos enviar varios componentes en uno solo
    <React.Fragment>

      <TodoCounter
      // TodoCounter requiere dos parametros, el total de todo's y el total de todo's completados
        total={totalTodos}
        completed={completedTodos}
      />
      {/* Al ejecutar TodoSearch se requieren dos parametros correspodientes al estado de uso de searchValue */}
      <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
      {/* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */}
        {searchedTodos.map(todo => (
          // React nos pide un identificador unico para cada elemento renderizado
          <TodoItem 
          key= {todo.text} 
          text={todo.text}
          completed={todo.completed}
          // Agregamos otra prop a todoItem
          // Esta ejecutará la funcion completeTodos con todo.text como parametro
          onComplete={() => completeTodo(todo.text)}
          // Esta prop funciona de la misma manera que la atnterior
          onDelete={() => deleteTodo(todo.text)}
          />
        ))} 
      </TodoList>

      {/* // Este componente creara y guardará las to-dos */}
      <CreateTodoButton />  
    </React.Fragment>  
    )
}

export { AppUI };