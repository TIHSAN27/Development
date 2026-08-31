import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos  ([...todos, {todo, isCompleted:false}])
    console.log(todos)// Logic to add a todo
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
    // Logic to add a todo
  }

  const handleEdit = () => {
    // Logic to edit a todo
  }

  const handleDelete = () => {
    // Logic to delete a todo
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5  p-5 bg-violet-100 rounded-xl min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange}  value={todo}    type="text"  className='bg-white w-1/2'/>
          <button onClick={handleAdd} className='font-bold border-2 bg-violet-700 rounded-xl p-2 text-white hover:bg-violet-950 py-1 text-sm cursor-pointer mx-5'>Add</button>
        </div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.map(item=>{  
            return <div className="todo flex w-1/4 justify-between my-3">
              <input type="checkbox" value={todo.isCompleted} name="" id="" />
              <div className={item.isCompleted?"line-through":""}>{item.todo}

              </div>
              <div className="buttons">
                <button onClick={handleEdit} className='font-bold border-2 bg-violet-700 rounded-xl p-2 text-white hover:bg-violet-950 py-1 text-sm cursor-pointer mx-1'>Edit</button>
                <button onClick={handleDelete} className='font-bold border-2 bg-violet-700 rounded-xl p-2 text-white hover:bg-violet-950 py-1 text-sm cursor-pointer mx-1'>Delete</button>
              </div>
              
            </div>
            })}
          </div>
      </div>
    </>
  )
}

export default App
