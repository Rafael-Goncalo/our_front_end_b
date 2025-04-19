import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const Login = () => {

//                  the STATES
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

// HOOK with the AuthContext and EXTRACT AuthenticateAdmin
    const { authenticateAdmin } = useContext(AuthContext)

// stores the useNavigate power in the variable
    const navigate = useNavigate()

const handleLogin = async (e) => {
        e.preventDefault()
        try {

// send login request to API and STORE the response in variable RESPONSE
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/login`,
                { email, password })

// Stores the token in localStorage THROUGH responde.data.authToken 
            localStorage.setItem('authToken', response.data.authToken)

// Update auth context
            await authenticateAdmin()

// Redirects to Admin page
            navigate('/admin')

// if anything goes wrong: token storage, authentication, update or navigation
        } catch(error) {
            console.error('Login error', error);
            setErrorMessage('Invalid email or password');
        }

        return (
            <div className='login-container'>
                <h2>Admin Login</h2>
                <form onSubmit= { handleLogin } className='login-form'>

{/* Section for email input                     */}
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type='email' value={ email }
                        onChange= {( e ) => setEmail(e.target.value )} required />
                    </div>

{/* Section for the password input */}
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input id='password' type='password' value={ password }
                        onChange={( e ) => setPassword(e.target.value )} required />
                    </div>

{/* Display errorMessage                    */}
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}

{/* Display submit button */}
                    <button type='submit' className='login-button'>Login</button>


                </form>
            </div>
        );

    }

    export default Login
