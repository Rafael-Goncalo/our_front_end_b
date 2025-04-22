import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

const handleSignup = async (e) => {
    e.preventDefault()
    try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/signup` {email, password})
        localStorage.setItem('authToken', response.data.authToken)

        await authenticateAdmin()

        navigate('/admin')
    } catch (error) {
        console.error('Signuo error', error);
        setErrorMessage('Signup failed. Please try again.')
    }
}   
    return (
       <div className='signup-container'>
        <h2>Admin Signup</h2>

        <form onSubmit={ handleSignup } className='signup-form'>

            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='email' value={ email }
                onChange={( e ) => setEmail(e.target.value)} required/>
            </div>

            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' value={ password }
                onChange={( e ) => setPassword(e.target.value)} required/>
            </div>
            
            {errorMessage && <p className='error-message'>{errorMessage}</p>}

            <button type='submit' className='signup-button'>Sign Up</button>

        </form>
       </div> 
    );
}    

export default Signup

