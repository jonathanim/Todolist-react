
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';

function App() {

  const [todos, setTodos] =useState([])

  const addTodos = todo => {
    if(!todo.text || todo.text.length < 3){
     alert("must be longer than 3 Char")
     return
    }else {
      const newTodos = [todo, ...todos]
      setTodos(newTodos)
      console.log(newTodos)
    }

  }


  return (
    <div className="App-container">
      <Title title={"Todo List"}/>
      <Form onSubmit={addTodos}/>
    </div>
  );
}

export default App;
