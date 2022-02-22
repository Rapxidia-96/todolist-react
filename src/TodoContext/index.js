import React from "react";
import {useLocalStorage} from './useLocalStorage'
const TodoContext =  React.createContext();

 function TodoProvider(props){
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue]= React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos =[];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } 
  else{
    //esto es super importante para generar buscadores!!!!!!!!!
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // console.log(searchText);
      return todoText.includes(searchText);
    })
  }

  
  const completeTodo =(text) =>{
    const todoIndex = todos.findIndex(todo => todo.text ===text);
    // investigar que es spread operator (...)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo =(text) =>{
    const todoIndex = todos.findIndex(todo => todo.text ===text);
    // investigar que es spread operator (...)
    const newTodos = [...todos];
    // splice borra elementos de un array
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
    return(
        <TodoContext.Provider value={{
          error,
          loading,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
 };
 export { TodoContext, TodoProvider };