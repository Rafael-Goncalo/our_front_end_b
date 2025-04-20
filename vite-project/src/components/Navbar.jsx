import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


// function COMPONENT
const Navbar = () => {
    const { isLoggedIn, handleLogout } = useContext(AuthContext);

    return (
        <nav className='entire-navbar'>

        <div className='navbar-logo'>
            <Link to='/'>Home Page</Link>
        </div>

        <div className='navbar-links'>
            <Link to='/allclubs'>All Clubs</Link>
            <Link to='/allfests'>All Festivals</Link>

        { isLoggedIn ? ( 
            <>
            <Link to='/admin'>Admin</Link>
            <button onClick={ handleLogout }>Logout</button>
            </>
             ) : (
            <Link to='/admin/login'>Login</Link>
             )}
            

        </div>
        </nav>
    );
}

    export default Navbar