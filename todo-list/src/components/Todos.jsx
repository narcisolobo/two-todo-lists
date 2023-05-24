import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Initial todos array utilizing crypto library
// for random IDs. Keys in React should not be
// array indices. May be left out but it's nice
// for styling the list before adding a todo.
const initialTodos = [
  {
    id: crypto.randomUUID(),
    task: 'Wash dishes',
    isComplete: false,
  },
];

/**
 * This component is a "smart" component. It contains the
 * todos array and all related mutating functions.
 */
function Todos() {
  const [todos, setTodos] = useState(initialTodos);

  /**
   * Function for adding a todo.
   */
  const addTodo = (todo) => {
    // It's best practice to use the callback version of
    // setState when the update depends on previous state.
    // ref: https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  /**
   * Function for toggling a todo's isComplete property.
   */
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  /**
   * Function for deleting a todo.
   */
  const deleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default Todos;
