import {useState} from 'react'
import Header from './components/tasks/Header'
import Tasks from './components/tasks/Tasks'
import AddTask from './components/tasks/AddTask'

function App() {

  const [showAddBtn, setShowAddBtn] = useState(false)

  const [tasks, setTasks] =useState([
    {
      id: 1,
      task: 'Post One',
      description: 'Author One',
      time: Date.now(),
      reminder: false
    },
    {
      id: 2,
      task: 'Post Two',
      description: 'Author Two',
      time: Date.now(),
      reminder: false
    },
    {
      id: 3,
      task: 'Post Three',
      description: 'Author Three',
      time: Date.now(),
      reminder: false
    },

  ])

  // Add Task
const addTask = (task) => {
  let id = Math.floor(Math.random() * 10000)
  // console.log(id)
  const newTask = {...task, id}
  setTasks([...tasks, newTask])
}

  // Delete Task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Tasks
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id 
      ? {...task, reminder : !task.reminder} : task
    ))
  }

  return (
      <>
      <div className="bg-gray-100">

          <Header onAdd={() => setShowAddBtn(!showAddBtn)} showAddBtn={showAddBtn}/>

          {showAddBtn && <AddTask onAdd={addTask}/>}

          {
            tasks.length > 0 ?
            <Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleTask}
            /> : 
            <div
            className='mx-auto w-3/4 p-3 bg-gray-200 border border-gray-300 
            text-center my-5 text-gray-700 rounded mx-auto container'
            role='alert'
            >No tasks to show!
            </div>
            }

        </div>
      </>
  );
}


export default App;
