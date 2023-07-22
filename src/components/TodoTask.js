import React, {useState} from 'react'
import { ImCross } from 'react-icons/im';
const TodoTask = (props) => {

  const {todo} = props
  const [isCompleted, setIsCompleted] = useState(false)

  return (
        <div className={isCompleted ? "todo-completed": "todo-task"}>
         <div>{todo.text}</div> <div className='todotask-edit'><ImCross/></div>
        </div>
  )
}

export default TodoTask