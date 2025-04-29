import { ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    const navigate = useNavigate()
    function onSeeDetailsClick(task){
        const query = new URLSearchParams(); //Para tratar problemas que tenham no titulo e descricao. Exemplo: espacos
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }


    return (
        <ul className="space-y-4 p-6 bg-pink-100 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => onTaskClick(task.id)} 
                        className={`bg-pink-200 text-left font-bold w-full text-red-600 p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}>
                        {task.title}
                    </button>
                    
                    {/*Ao clicar no botão ChevronRight, deve mudar de pagina */}
                    <button 
                        onClick={() => onSeeDetailsClick(task)}
                        className="bg-pink-200 text-red-600 p-2 rounded-md">
                            <ChevronRight />
                    </button>

                    <button 
                        onClick={() => onDeleteTaskClick(task.id)}
                        className={`bg-pink-200 text-red-600 p-2 rounded-md`}>
                        <Trash2 />
                    </button>
                </li>
        ))}
        </ul>
    )
}

export default Tasks;