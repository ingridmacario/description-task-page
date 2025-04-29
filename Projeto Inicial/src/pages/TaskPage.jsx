import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage(){
    const[searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    const navigate=useNavigate();
    function onBackClick(){
        return navigate(-1);
    }

    return (
        <div className="w-screen h-screen bg-pink-200 flex flex-col items-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button
                        onClick={() => onBackClick()}
                        className="text-pink-900 absolute left-0 top-0 bottom-0">
                            <ChevronLeft />
                    </button>

                    <h1 className="text-3xl text-red-900 font-bold text-center">
                        Detalhes da Tarefa
                    </h1>
                </div>

                <div className="bg-pink-100 p-4 rounded-md">
                    <h2 className="text-xl text-red-600 font-bold text-center">{title}</h2>
                    <p className="text-red-600 text-center">{description}</p>
                </div>




            </div>

        </div>
    );
    



}

export default TaskPage;