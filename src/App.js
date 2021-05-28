import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [showAddBtn, setShowAddBtn] = useState(false)

  const [tasks, setTasks] =useState([])

     useEffect(() => {
     const getTasks = async () => {
       const serverTask = await fetchTasks()
       setTasks(serverTask)
     }
     getTasks()
   }, [])

  // Fetch tasks Data
  const fetchTasks = async () => {
    try {
      const res = await fetch(`https://express-tasks.herokuapp.com/tasks`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data)
      return data.task
    } catch (err) {
      console.error(err.message)
    }
   }

  // Fetch single task Data
  const fetchTask = async (id) => {
    try{
      const res = await fetch(`https://express-tasks.herokuapp.com/task/${id}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
     const data = await res.json()
     return data.task
    }
    catch(err){
      console.error(err.message)
    }
   }


  // Add Task
const addTask = async (task) => {
  const res = await fetch(`https://express-tasks.herokuapp.com/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
}

  // Delete Task 
  const deleteTask = async (id) => {
    await fetch(`https://express-tasks.herokuapp.com/task/${id}`,
    {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Tasks
  const toggleTask = async (id) => {
    const toggle = await fetchTask(id)
    const updatedToggle = {...toggle, reminder: !toggle.reminder}

    const res = await fetch(`https://express-tasks.herokuapp.com/task/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedToggle)
      
    })

    const data = await res.json()


    setTasks(tasks.map((task) => task.id === id 
      ? {...task, reminder : data.reminder} : task
    ))
  }

  return (
      <Router>
        <div className="bg-gray-100">

            <Header onAdd={() => setShowAddBtn(!showAddBtn)} showAddBtn={showAddBtn}/>


              <Route path='/' exact render={(props) => (
                <>
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
                </>
              )} />

              <Route path='/about' component={About} />
              <Footer />

          </div>
      </Router>
  );
}


export default App;
