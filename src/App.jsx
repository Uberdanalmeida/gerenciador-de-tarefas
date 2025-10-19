import './App.css'
import AddTask from './components/AddTask'
import Task from './components/Task'

function App() {
  return (
    <div className='h-screen w-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-cenetr'>Gerenciador de Tarefas</h1>
        <AddTask></AddTask>
        <Task></Task>
      </div>
    </div>
  )
}

export default App