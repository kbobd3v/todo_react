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
  // Por defecto el valor de todo's seran los todos creados a mano
  const [todos, setTodos] = React.useState(defaultTodos);
  // Filtramos los todos que tengan el atributo completed true y con length los contamos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Aqui contamos todos los todo's
  const totalTodos = todos.length;
  
  let searchedTodos = [];

  // Si el largo de searchValue no es mayor o igual a uno, le asigna los todo's por defecto
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

  // Creamos una funcion para completar los todo's, recibe el texto del todo como parametro
  const completeTodo = (text) => {
    // Como los todo's estan en un arreglo podemos buscar el index del todo que
    // Tenga el mismo texto que pasamos por parametro en la funcion
    // El metodo findIndex nos ayuda, recibe una funcion flecha con la condicion que queremos comparar
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // Usamos el operador spread "..." para anexar tambien los todo's creados a mmano
    const newTodos = [...todos];
    // Entonces como ya tenemos nuesrto index del todo al que queremos cambiar el estado completed
    // Simplemente ubicamos el todoIndex en el arreglo y como un todo es un objeto con atributos
    // solo es modificar el atributo deseado, en este caso "completed", lo cambiamos a true
    newTodos[todoIndex].completed = true;
    // Y actualizamos el estado de todos con setTodos y el valor de newTodos
    // Recuerda, cada vez que actualizas un estado react hace un re-render
    setTodos(newTodos);
  }

  // Creamos una funcion para eliminar los todo's, funciona de la misma manera que completeTodo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    // splice recibe 2 parametros, el primero es el indice que queremos eliminar
    // El segundo es cuantos elementos eliminara desde el indice que agregamos
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
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
  );
}

export default App;
