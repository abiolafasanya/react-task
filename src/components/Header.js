import {useLocation} from 'react-router-dom'
import Button from './Button'


function Header({onAdd, showAddBtn}) {
    const location = useLocation()
    return (
        <div className={headerStyle}>
            <h1 className='text-2xl text-green-300'>Task Header</h1>
            {location.pathname === '/' && (
            <Button 
                onAdd={onAdd} 
                showAddBtn={showAddBtn}
            />
            )}
        </div>
    )
}
const headerStyle = 'bg-gray-700 py-2 flex justify-between px-7'

export default Header
