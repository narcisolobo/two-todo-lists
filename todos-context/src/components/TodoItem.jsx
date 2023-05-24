import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import { HiTrash } from 'react-icons/hi2';

/**
 * The todo item component, which takes in a todo prop
 * and destructures the dispatch function from context.
 */
function TodoItem({ todo }) {
  const { dispatch } = useContext(TodosContext);
  const handleCheck = () => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: { todoId: todo.id, isComplete: !todo.isComplete },
    });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: { todoId: todo.id } });
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
