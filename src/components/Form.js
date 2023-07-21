import React, { useState } from 'react'
import "./Form.css"
import IdCreator from '../helper/IdCreator'



const Form = (props) => {
  const [todo, setTodo] = useState('')

  const handleChange = e => {
    setTodo(e.target.value)
  }
  
  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: IdCreator(),
      text: todo
    })

    setTodo('')
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
