
function Button({onAdd, showAddBtn}) {

    return (
        <div>
            <button 
                onClick={onAdd}
                className={showAddBtn ? close : open}>
                {showAddBtn ? 'Close' : 'Add'}
            </button>
        </div>
    )
}
const open = 'bg-green-500 px-4 py-2 text-white rounded mr-2 focus:outline-none hover:bg-green-400'
const close = 'bg-red-600 px-4 py-2 text-red-100 rounded mr-2 focus:outline-none hover:bg-red-400'

export default Button
