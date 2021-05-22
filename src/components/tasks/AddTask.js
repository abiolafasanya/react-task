import {useState, useEffect} from 'react'


function AddTask({onAdd}) {
    
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!task) return alert('Please add task')

        onAdd({task, description, time, reminder})

        setTask('')
        setDescription('')
        setTime('')
        setReminder(false)
    }

    return (
        <div className='container py-5 px-5 lg:w-1/2 mx-auto'>
            <form onSubmit={onSubmit}> 
                <h1 className={infoStyle}>Add new Task</h1>
                <div className="form-group p-2">
                    <label htmlFor="">Task</label>
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className={formControl} />
                </div>
                <div className="form-group p-2">
                    <label htmlFor="">Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className={formControl} />
                </div>
                <div className="form-group p-2">
                    <label htmlFor="">Date</label>
                    <input type="date" value={time} onChange={(e) => setTime(e.target.value)} className={formControl} />
                </div>
                <div className="form-group p-2 flex flex-col">
                    <span><input type="checkbox"
                        checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} value={reminder} 
                        className='p-3 m-5' /> 
                            Do you want a reminder
                    </span>
                    <button className={Btn}>Add New</button>

                </div>

            </form>
        </div>
    )
}

const infoStyle = 'text-center text-green-700 text-2xl bg-green-100 p-2 border border-green-400 rounded'
const formControl = "block bg-white-100 w-full p-3"
const Btn = "bg-blue-500 hover:bg-blue-400 text-blue-100 rounded px-5 py-3"

export default AddTask
