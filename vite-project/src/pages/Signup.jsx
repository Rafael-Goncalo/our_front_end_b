import { useState, use Context } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const Signup = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const AuthContext = createContext();
    const navigate = useNavigate();

const handleSignup = (e) => {
    e.preventDefault()
    try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/signup` {email, password})
        localStorage.item('authToken', response.data.authToken)

        await authenticateAdmin()

        navigate('/admin')
    }}}    

