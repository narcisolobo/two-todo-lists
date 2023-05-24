import { HiTrash } from 'react-icons/hi2';

/**
 * The todo item component, which takes in a single todo
 * and two mutating functions from TodoList.jsx. I had to do
 * a bit of prop drilling here - this would be useful to demo
 * the usefulness of the Context API and useReducer.
 */
function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const handleCheck = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          id={todo.id}
          type="checkbox"
          className="form-check-input"
          checked={todo.isComplete}
          onChange={handleCheck}
        />
        <label
          className={`form-check-label ${
            todo.isComplete && 'text-decoration-line-through'
          }`}
          htmlFor={todo.id}>
          {todo.task}
        </label>
      </div>
      <button className="btn btn-sm btn-danger" onClick={handleDelete}>
        <HiTrash />
      </button>
    </li>
  );
}

export default TodoItem;
