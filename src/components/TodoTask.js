import React, {useState} from 'react'
import { ImCross } from 'react-icons/im';
const TodoTask = (props) => {

  const {todo, index, todos, setTodos} = props
  const [isCompleted, setIsCompleted] = useState(false)

  const handleDelete = (id) => {
    const newList = todos.filter((item, i) => item.id !== id)
    console.log(newList)
    setTodos(newList)
  }


  return (
        <div className={isCompleted ? "todo-completed": "todo-task"}>
         <div>{todo.text}</div> <div handleDeleteclassName='todotask-edit'><ImCross onClick={(todo)=>handleDelete(todo.id)}/></div>
        </div>
  )
}

export default TodoTask