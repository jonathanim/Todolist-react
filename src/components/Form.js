import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <div className='form-container'>
      <form>
          <label>Add a to do Task</label>
          <input
          type="text"
          placeholder='Insert here'
          />
      </form>
    </div>
  )
}

export default Form
