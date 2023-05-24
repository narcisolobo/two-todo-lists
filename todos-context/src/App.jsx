import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosProvider from './context/TodosContext';

/**
 * All my top-level component functions are function
 * declarations. It helps to differentiate between
 * top-level functions and nexted arrow functions.
 *
 * The use of Bootstrap is all throughout this application.
 * Students tend to love it for ease of use and the latest
 * version's built-in dark mode.
 */
function App() {
  return (
    <TodosProvider>
      <div className="container my-3">
        <h1 className="mb-3">Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

// I just like having the export at the bottom.
export default App;
