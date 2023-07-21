import React, { useState } from 'react'
import "./Form.css"



const Form = () => {
  const [todo, setTodo] = useState('')


  const handleChange = e => {
    // setTodo(prev=> {
      
    // })
  }
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
          <label>Add Task: 
          <input
          type="text"
          placeholder='Add a todo'
          onChange={handleChange}
          value={todo}
          name="todo"
          className='todo-input'
          />
          </label>
          <button>Add Task</button>
      </form>
    </div>
  )
}

export default Form
