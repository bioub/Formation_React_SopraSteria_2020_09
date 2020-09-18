import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos() {
  return <div className="Todos">
    <TodoForm />
    <TodoList />
  </div>
}

export default Todos;