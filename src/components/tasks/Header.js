import Button from './Button'

function Header({onAdd, showAddBtn}) {

    return (
        <div className={headerStyle}>
            <h1 className='text-2xl text-green-300'>Task Header</h1>
            <Button onAdd={onAdd} showAddBtn={showAddBtn}/>
        </div>
    )
}
const headerStyle = 'bg-gray-700 py-2 flex justify-between px-7'

export default Header
