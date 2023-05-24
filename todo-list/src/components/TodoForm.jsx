import { useState } from 'react';

/**
 * The todo form component for adding a todo which
 * takes in the addTodo function from Todos.jsx. Includes
 * simple client-side validation. The todo state is
 * managed as an object.
 */
function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: crypto.randomUUID(),
    task: '',
    isComplete: false,
  });
  const [errors, setErrors] = useState(null);

  /**
   * Destructures the currentTarget's id and value from
   * the event, and sets the todo's property accordingly.
   * May be overkill, but it's useful for students to see
   * computed property names and the callback version of
   * the setState function.
   */
  const handleChange = (e) => {
    const { id, value } = e.currentTarget;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [id]: value,
    }));
  };

  /**
   * I prefer to check for errors on the blur event, rather
   * than the change event. I think it's a better user
   * experience.
   */
  const handleBlur = () => {
    if (todo.task.trim().length === 0) {
      setErrors('Please enter your todo.');
    } else {
      setErrors(null);
    }
  };

  /**
   * Calls the addTodo prop from the parent. User cannot click
   * the submit button if there are errors, so I chose not to
   * check for a valid form here.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({
      id: crypto.randomUUID(),
      task: '',
      isComplete: false,
    });
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              What needs to get done?
            </label>
            <input
              type="text"
              name="task"
              id="task"
              placeholder="Enter task"
              className="form-control"
              value={todo.task}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors && <span className="form-text text-danger">{errors}</span>}
          </div>
          <div className="text-end">
            {/* this button is disabled if there are errors */}
            <button
              type="submit"
              className={`btn btn-primary ${errors && 'disabled'}`}>
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
