import logo from './logo.svg';
import './App.css';
import TodoList from './features/Todos/TodoList';
import AddTodo from './features/Todos/AddTodo';
import EditTodos from './features/Todos/EditTodos';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-12">
      <h1 className="text-center font-bold text-2xl text-gray-700">Todo Application with React - Redux toolkit</h1>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add-todo" element={<AddTodo></AddTodo>} />
        <Route path="/edit-todo/:id" element={<EditTodos></EditTodos>} />
      </Routes>
    </div>
  );
}

export default App;
