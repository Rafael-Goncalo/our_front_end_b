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

{/* ternary operator IF is ( ? ) ELSE is ( : ), think it of a fork in a road */}
{/* what is inside the () after the ? renders IF the statement is TRUE */}

        { isLoggedIn ? ( 
            <>
            <Link to='/admin'>Admin</Link>
            <button onClick={ handleLogout }>Logout</button>
            </>
             )
{/* what is inside the () after the : renders IF the statement is FALSE */}
             : (
            <Link to='/admin/login'>Login</Link>
             )}
            

        </div>
        </nav>
    );}

    export default Navbar