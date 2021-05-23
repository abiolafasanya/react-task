import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='container mx-auto px-5 text-center bg-gray-700 py-3'>

            <Link to="/" className={links}>Home </Link>
            <Link to="/about" className={links}>About page </Link>
        </div>
    )
}

const links = 'm-2 text-green-400 hover:text-green-200'
export default Footer
