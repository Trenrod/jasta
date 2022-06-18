import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Todos</h1>
      <CreateTodo></CreateTodo>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
