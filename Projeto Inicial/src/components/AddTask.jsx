import { useState } from "react";
import Input from "./Input";

function AddTask({onAddTaskSubmit}){
    //States para obter o valor inputado pelo usuario do titulo e descricao
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-pink-100 rounded-md shadow flex flex-col">
            <Input 
                type="text" 
                placeholder="Digite o título da tarefa" 
                value = {title}
                onChange={(event) => setTitle(event.target.value)}
            />      
            <Input 
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                value = {description}
                onChange={(event) => setDescription(event.target.value)} 
            />
            <button
                onClick={() => {
                    // Verificar se o titulo e a descricao estao preenchidos --> .trim() esta removendo o espaco em branco 
                    if (!title.trim() || !description.trim()) {
                       return alert("Preencha o título e a descrição da tarefa."); 
                    }

                    onAddTaskSubmit(title, description);
                    setTitle(""); //Apos adicionar, apagar o campo de titulo
                    setDescription(""); //Apos adicionar, apagar o campo de descricao
                }}
                className="bg-pink-500 text-white font-bold px-4 py-2 rounded-md">
                    Adicionar
            </button>

        </div>
    );
}

export default AddTask;