import './App.css'
import { useState, useEffect } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoItem from './components/TodoItem';
import TodoForm from './components/Todofrom';

function App() {

  const [todos, setTodos] = useState([]);
  const addtodo = (todos) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todos }])
  }
  const updatetodo = (id, todos) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? todos : item)));
  }
  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  }
  const toggleComplte = (id) => {
    setTodos((prev) => prev.map((item) => item.id === id ? { ...item, complted: !prev.complted } : item));
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (

    <TodoProvider value={{ todos, addtodo, updatetodo, deletetodo, toggleComplte }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (<div key={todo.id} className='w-full'><TodoItem todo={todo}></TodoItem></div>))}
          </div>
        </div>
      </div></TodoProvider >
  )
}

export default App
