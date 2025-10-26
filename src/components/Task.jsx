import { list } from "postcss"
import { FaChevronRight } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Task(props) {

    const navigate = useNavigate()
    const query = new URLSearchParams()
    query.set("title", list.title)
    query.set("description", list.description)

    function detaiClick(list) {
        navigate(`/list?${query.toString()}`)
    }

    return(
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {props.taskList.map((list) => (
                    
                <li key={list.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(list.id)} className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${list.isComplet && 'line-through'}`}>{list.title}</button> 

                    <Button onClick={() => detaiClick(list)}><FaChevronRight /></Button>

                    <Button onClick={() => props.deleteTask(list.id)} ><FaRegTrashAlt /></Button>
                </li>
                 ))
                }
            </ul>
        </div>
    )
}

export default Task