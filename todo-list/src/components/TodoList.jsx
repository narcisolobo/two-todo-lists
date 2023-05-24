import TodoItem from './TodoItem';

/**
 * The todo list component which takes in the todos state
 * and two mutating functions from Todos.jsx.
 */
function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    // If there are no todos, render nothing.
    todos.length > 0 && (
      <ul className="list-group shadow mb-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    )
  );
}

export default TodoList;
