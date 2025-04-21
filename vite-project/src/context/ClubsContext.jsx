// Any component that needs access to club data can now use:
// const { allClubs, fetchAllClubs } = useContext(ClubContext);

import { createContext, useState, useEffect } from 'react'
import axios from 'axios'


// CREATES & EXPORTS ClubContext which will serve as communication channel.
export const ClubContext = createContext();


// CREATES & EXPORTS the provider/wrapper that will FETCH and PROVIDE information to the Context.
// as well as SET to children everything that is between its wings <>
export const ClubContextProvider = ({ children }) => {

    
// allClubs is the state that is empty by default and only will be updated after the function executes.
// setAllClubs is the updater that is empty by default and will only "have code" after the function executes
// in this case with the info fetched with response.data.
    const [allClubs, setAllClubs] = useState([]);


 // CREATES a new function fetchAllClubs that STORES the response.data that axios fetched
    const fetchAllClubs = async () => {
       try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/club`);


// UPDATES the setAllClubs with the information found
        setAllClubs(response.data);
       } catch (error) {
        console.error('Error fetching clubs', error);
       }
    };


// UseEffect has two arguments a Arrow Function & Dependency
// UseEffect runs code when the component first renders. It triggers the fetchAllClubs 
// the dependency is empty so it will render once.
useEffect(() => { fetchAllClubs(); }, []);


// CREATE a object with 2 things: the state allClubs fetched from the B/E
// And the function fetchAllCLubs used to fetch the data from the API
    const value = { allClubs, fetchAllClubs };

    return (


        // makes the data in the VALUE object available to all components within the WRAPPER/PROVIDER
    <ClubContext.Provider value = {value} >
        { children }
    </ClubContext.Provider>

);
};
