import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import './index.css';
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        title: "Empreendedorismo",
        description: "Para nós, o céu não é o limite.",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Resultados",
        description: "Somos pessoas obcecadas por resultados e sempre buscamos alta performance.",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Inovação",
        description: "Tentamos, erramos e mudamos de forma simples e rápida.",
        isCompleted: false,
      },
      {
        id: 4,
        title: "All Together",
        description: "Nessa jornada, que parece impossível, celebramos as conquistas e encaramos tudo com leveza e bom humor.",
        isCompleted: false,
      },
    ]
 );

  //Armazenar a nova tarefa para ficar salva mesmo quando a tela atualiza
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Atualizar a tarefa quando o id for correspondente
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }; // Alterna o estado de conclusão
      }
      return task; // Retorna a tarefa inalterada
    });

    setTasks(newTasks); // Atualiza o estado usando setTasks
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId); // Mantem todos os elementos da lista MENOS o que foi clicado
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description){
    const newTasks = {
      id: v4(), // Gerar id aleatorio
      title: title, 
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-pink-200 flex justify-center p-6">
      <div className="w-[500px] space-y-4"> {/*Espacamento vertical entre o AddTask e Tasks*/}
        <h1 className="text-3xl text-red-600 font-bold text-center">
          Vamos alimentar o futuro do mundo!
        </h1>
        {<AddTask onAddTaskSubmit={onAddTaskSubmit}/> }
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />

      </div>
    </div>
  );
}

export default App;