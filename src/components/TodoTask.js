import React, {useState} from 'react'

const TodoTask = (props) => {

  const {todo, index} = props
  const [isCompleted, setIsCompleted] = useState(false)


  console.log(todo)
  return (
    <div className='todoTask-container'>
        <div className={isCompleted ? "todo-completed": "todo-task"}>

        </div>
    </div>
  )
}

export default TodoTask