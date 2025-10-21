import { list } from "postcss"
import { FaChevronRight } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Task(props) {
    return(
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {props.taskList.map((list) => (
                    
                <li key={list.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(list.id)} className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${list.isComplet && 'line-through'}`}>{list.title}</button> 

                    <button className="bg-slate-400 p-2 rounded-md text-white"><FaChevronRight /></button>

                    <button onClick={() => props.deleteTask(list.id)} className="bg-slate-400 p-2 rounded-md text-white"><FaRegTrashAlt /></button>
                </li>
                 ))
                }
            </ul>
        </div>
    )
}

export default Task