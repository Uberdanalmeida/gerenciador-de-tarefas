import './App.css'
import AddTask from './components/AddTask'
import Task from './components/Task'

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask></AddTask>
      <Task></Task>
    </div>
  )
}

export default App