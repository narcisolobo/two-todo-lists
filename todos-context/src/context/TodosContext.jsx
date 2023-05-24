/**
 * I much prefer using the Context API and useReducer
 * over prop drilling. It may be too advanced for the
 * beginner, but this approach drives home the concept
 * of pure functions - as noted in the difference between
 * each toggle todo action.
 */

import { createContext } from 'react';
import { useReducer } from 'react';

// Create todos context with initial values for autocomplete.
const TodosContext = createContext({
  state: { todos: [] },
  dispatch() {},
});

// Initial state for useReducer.
const initialTodos = {
  todos: [
    {
      id: crypto.randomUUID(),
      task: 'Wash dishes',
      isComplete: false,
    },
  ],
};

/**
 * The reducer function for adding, toggling, and deleting todos.
 */
const todosReducer = (state, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TODO':
      return {
        todos: [...todos, payload.todo],
      };
    case 'TOGGLE_TODO':
      const updatedTodos = todos.map((todo) => {
        if (todo.id === payload.todoId) {
          todo.isComplete = payload.isComplete;
        }
        return todo;
      });
      return { todos: updatedTodos };
    case 'DELETE_TODO':
      const filteredTodos = todos.filter((todo) => todo.id !== payload.todoId);
      return { todos: filteredTodos };
    default:
      console.log('Unexpected action type.');
      return { todos };
  }
};

function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export { TodosContext };
export default TodosProvider;
