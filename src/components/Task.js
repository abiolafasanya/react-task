import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {

    return (
        <div 
            className={` mx-auto w-3/4 bg-green-50 p-3 m-2 mx-auto container text-gray-700 
            ${task.reminder ? trueStyle : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
           <h1 
            className='flex justify-between'>{task.task}
           <FaTimes 
                className='text-red-500 cursor-pointer'
                onClick={() => onDelete(task.id)}
                />
           </h1>
           <p>{task.description}</p>
           <code>{task.time}</code>
        </div>
    )
}
const trueStyle = 'border-l-8 border-green-500'

export default Task
