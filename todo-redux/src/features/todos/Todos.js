import React from 'react';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos() {
  return <div className="Todos">
    <TodoForm />
    <TodoList />
    <TodoFooter />
  </div>
}

export default Todos;