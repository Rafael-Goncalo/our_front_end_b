import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

   const [currentAdmin, setCurrentAdmin] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const nav = useNavigate();


// function to grab the token from the LocalStorage in the Browser
    const authenticateAdmin = async () => {

// to retrive the authentication token from the LS when store in the variable      
        const tokenFromLocalStorage = localStorage.getItem('authToken');

// check if no token EXISTS in the LS/ No token means not logged in        
        if (!tokenFromLocalStorage) {

// update the STATE when no token is found or exists
        setCurrentAdmin(null); setIsLoading(false); setIsLoggedIn(false);

// else or TOKEN FOUND/ EXISTS
        } else {

// it will TRY TO execute the code that is inside
        try {

// the code SENDS the token to the back-end and if the token is valid 
// the back-end responds with the admin info embedded inside payload            
        const responseFromVerifyRoute = await axios.get(`${ import.meta.env.VITE_API_URL }/admin/verify`,
      { headers: {authorization: `Bearer ${tokenFromLocalStorage}` } } );
    console.log('authenticate admin function', responseFromVerifyRoute);

// update the STATE with the response from the back-end 
        setCurrentAdmin(responseFromVerifyRoute.data.payload); 
        setIsLoading(false); setIsLoggedIn(true);
    
    } catch (error) {
        console.log(error);
        setCurrentAdmin(null); setIsLoading(false); setIsLoggedIn(false);
    }
}
};
// calls the function when componet loads
useEffect(() => { authenticateAdmin(); }, []);

// REMOVE the token, RUN the function authenticateAdmin again and it will find no token and send the user back to login
async function handleLogout() {
    localStorage.removeItem('authToken');
    await authenticateAdmin();
    nav('admin/login');
}

// anything after the RETURN is rendered in the DOM
return (

// the .Provider is used to put all states and functions of AuthContexProvider inside AuthContex
    <AuthContext.Provider 
    value= {{ currentAdmin, setCurrentAdmin, setIsLoading, setIsLoggedIn, authenticateAdmin, handleLogout, }}>
        
        { children }

    </AuthContext.Provider>
);
}

export { AuthContext, AuthContextProvider };
