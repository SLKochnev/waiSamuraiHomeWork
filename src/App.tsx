import { useState } from 'react'
import './App.css' 

// const tasks = [];
// const tasks = null;
const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: true,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 2,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 2,
  },
]

const priorityColors: Record<number, string> = {
  0: "#d3dee4",  // Низкий - белый
  1: "#b5cbff",  // Средний - светло-персиковый
  2: "#8ac3ff",  // Высокий - персиковый
  3: "#487cff",  // Срочный - оранжевый
  4: "#3700ff",  // Наивысший - ярко-оранжевый
}

function App() {
  
  const [selectedTaskId, setSelectedTaskId] = useState(0);

  if (tasks === null) {
    return (
      <div>
        <h2>Загрузка...</h2>
      </div>
    )
  } 

  if (tasks.length === 0) {
    return (
      <div>
        <h4>Задачи отсутствуют</h4>
      </div>
    )
  } 


  
  const tasksNew = tasks.map((task) => {
    return (
      <div 
        key={task.id} 
        className="task-card" 
        style={{ backgroundColor: priorityColors[task.priority], border: task.id === selectedTaskId ? "2px solid blue" : "none" }} 
        onClick={() => {setSelectedTaskId(task.id)}}>
      <div>
        <h4 style={{ display: "inline-block" }}>Заголовок:</h4><span style={{ marginLeft: "8px", textDecorationLine: task.isDone ? 'line-through' : 'none'}} >{task.title}</span>
      </div>
      <div>
        <h4 style={{ display: "inline-block" }}>Статус:</h4><input style={{ marginLeft: "8px"}} type="checkbox" checked={task.isDone} />
      </div>
      <div>
        <h4 style={{ display: "inline-block" }}>Дата создания:</h4><span style={{ marginLeft: "8px"}}>{task.addedAt}</span>
      </div>
      </div>
    )
  })
  

  return (

   <div>
      <button onClick={ () => {setSelectedTaskId(0)}} className='button-close'>Сбросить выделение</button>
      {tasksNew}
    </div>
  )
}

export default App
