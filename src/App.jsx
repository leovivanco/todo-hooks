import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Task from './components/Task';
import Footer from './components/Footer';
import Button from './components/Button';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const setNewItem = text =>
    setTodos([{ text, id: text + todos.length, complete: false }, ...todos]);
  const toggleComplete = index => {
    const newTodos = todos;
    newTodos[index].complete = !newTodos[index].complete;
    setTodos([...newTodos]);
  };
  const deleteTodo = index => {
    const newTodos = todos;
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  };
  return (
    <div className="App">
      <Title title="Todo Now" />
      <Form onSubmit={text => setNewItem(text)} />
      <Task todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <Button color="danger" click={() => setTodos([])} value="Reset" />
      <Footer date={new Date().getFullYear()} />
    </div>
  );
}

export default App;
