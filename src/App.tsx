import './App.css' 

function App() {

  const tasks = [
  { id: 1, title: "Купить продукты на неделю", isDone: true },
  { id: 2, title: "Полить цветы", isDone: true },
  { id: 3, title: "Сходить на тренировку", isDone: false },
  { id: 4, title: "Пропылисосить дома", isDone: false },
]

  const newTasksElement = tasks.map((task) => (
      <li key={task.id} className='task-list-li'>
        <div>{task.title}</div> 
        <input type="checkbox" checked={task.isDone} />
      </li>
  ))
 
  return (
   <div className="task-list">
      <h1>Список дел</h1>
      <ul>{newTasksElement}</ul>
    </div>
  )
}

export default App
