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
import './css/App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'Tomar curso de react', completed: false },
  { text: 'Llorar a la lloreria', completed: false },
]



function App() {
  // El estado de uso nos permite cambiar el valor de una variable cuando se requiera
  // En este caso searchValue es el nombre que escogimos para el valor inicial que será ''
  // setSearchValue es el nuevo valor que se le dará a searchValue cuando lo necesitemos
  const [searchValue, setSearchValue] = React.useState('');  
  // Por defecto el valor de todos seran los todos creados a mano
  const [todos, setTodos] = React.useState(defaultTodos);
  // Filtramos los todos que tengan el atributo completed true y con length los contamos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Aqui contamos todos los todos
  const totalTodos = todos.length;
  
  let searchedTodos = [];

  // Si el largo de searchValue no es mayor o igual a uno, le asigna los todos por defecto
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    // De lo contrario filtra los todo's que tengan searchValue en su todo.text
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
  })
}
  return (
    // Cada componente de react solo soporta que le enviemos una etiqueta por componente
    // Con la etiqueta React Fragment podemos enviar varios componentes en uno solo
    <React.Fragment>

      <TodoCounter
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
          />
        ))} 
      </TodoList>

      {/* // Este componente creara y guardará las to-dos */}
      <CreateTodoButton />  
    </React.Fragment>  
  );
}

export default App;
