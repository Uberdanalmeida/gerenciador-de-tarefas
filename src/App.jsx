import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Task from './components/Task'
import { v4 } from 'uuid'

function App() {

const [list, setList] = useState (
JSON.parse(localStorage.getItem("list")) || []
)

useEffect(() => {
  localStorage.setItem("list", JSON.stringify(list))
}, [list])

function onTaskClick(taskId) {
  const newTask = list.map(list => {
    if(list.id === taskId) {
      return {...list, isComplet: !list.isComplet}
    }
    return list;
  })
  setList(newTask)
}

function deleteTask(taskId) {
  const newTask = list.filter((list) => list.id != taskId)
  setList(newTask)
}

function AddTaskSubmit (title, description) {

  const newTask = {
      id: v4(),
      title,
      description,
      isComplet: false
  };

  setList([...list, newTask])
}

  return (
    <div className='h-screen w-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask AddTaskSubmit={AddTaskSubmit}></AddTask>
        <Task taskList={list} onTaskClick={onTaskClick} deleteTask={deleteTask}></Task>
      </div>
    </div>
  )
}

export default App