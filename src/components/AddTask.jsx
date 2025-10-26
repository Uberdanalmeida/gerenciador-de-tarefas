import { useState } from "react"
import Input from "./Input";

function AddTask({AddTaskSubmit}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

            <Input type="text" name="" id="" placeholder="Digite o titulo da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)}/>

            <Input type="text" name="" id="" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)}/>

            <button onClick={() => {

                if (!title.trim() || !description.trim()){
                    return alert("Preencha o titulo e a descrição da tarefa.");
                }

                AddTaskSubmit(title, description)
                setTitle("");
                setDescription("");
            }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}

export default AddTask