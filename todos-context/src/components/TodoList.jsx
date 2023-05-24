import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import TodoItem from './TodoItem';

/**
 * The todo list component which destructures the
 * todos state from context.
 */
function TodoList() {
  const {
    state: { todos },
  } = useContext(TodosContext);

  return (
    // If there are no todos, render nothing.
    todos.length > 0 && (
      <ul className="list-group shadow mb-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    )
  );
}

export default TodoList;
