// Aqui importamos lo que necesitamos para ejecutarlo en las funciones de app
// import logo from './logo.svg';
// import './App.css';
import React from "react";
// Debe importarse con las llaves asi como exportamos en el archivo donde esta la funcion
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodobutton";
import { TodoSearch } from "./TodoSearch";

const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Tomar curso de react', completed: false },
  { text: 'Llorar a la lloreria', completed: false },
]

function App() {
  return (
    // Cada componente de react solo soporta que le enviemos una etiqueta por componente
    // Con la etiqueta React Fragment podemos enviar varios componentes en uno solo
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
      {/* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */}
        {todos.map(todo => (
          // React nos pide un identificador unico para cada elemento renderizado
          <TodoItem key= {todo.text} text={todo.text}/>
        ))} 
      </TodoList>

      {/* // Este componente creara y guardará las to-dos */}
      <CreateTodoButton />  
    </React.Fragment>  
  );
}

export default App;
