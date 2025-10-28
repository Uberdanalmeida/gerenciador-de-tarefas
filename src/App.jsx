import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { v4 as uuid } from "uuid";
import Title from "./components/Title";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    async function fetchList() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setList(data);
    }
    // fetchList()
  }, []);

  function onTaskClick(taskId) {
    const newTask = list.map((list) => {
      if (list.id === taskId) {
        return { ...list, isComplet: !list.isComplet };
      }
      return list;
    });
    setList(newTask);
  }

  function deleteTask(taskId) {
    const newTask = list.filter((list) => list.id != taskId);
    setList(newTask);
  }

  function AddTaskSubmit(title, description) {
    const newTask = {
      id: uuid(),
      title,
      description,
      isComplet: false,
    };

    setList([...list, newTask]);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask AddTaskSubmit={AddTaskSubmit}></AddTask>
        {list.length ? (
          <Task
            taskList={list}
            onTaskClick={onTaskClick}
            deleteTask={deleteTask}
          ></Task>
        ) : null}
      </div>
    </div>
  );
}

export default App;
