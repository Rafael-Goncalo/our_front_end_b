import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const FestContext = createContext();

export const FestContextProvider = ({ children }) => {
    
    const [allFests, setAllFests] = useState ([]);

    const fetchAllFests = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/fest`);
            setAllFests (response.data);
        } catch (error) {
            console.error('Error fetching Fests', error)
        }
    };

useEffect (() => {fetchAllFests(); }, []);

const value = { allFests, fetchAllFests };

return (
    <FestContext.Provider value = { value } >
        { children }
    </FestContext.Provider>
);

};
