import { useContext, useEffect } from 'react'
import { ClubContext } from '../context/ClubsContext'
import { Link } from 'react-router-dom'

export const AllClubsPage = () => {
    const { allClubs, fetchAllClubs } = useContext(ClubContext);

    useEffect(() => { fetchAllClubs(); }, []);

    return (
      <div className='all-clubs-page'>
        <h1>All Clubs</h1>

{/* .map creates a new array of JSX elements with the info inside allClubs */}
        {allClubs.map((oneClub) => {
            return (
            <div key= {oneClub._id} className='one-club-card'>
             <h3>Club: {oneClub.clubName}</h3>
             <h3>City: {oneClub.location}</h3>
             <h3>Party: {oneClub.event}</h3> 
            </div>
            )
        })}
      </div>  
    )
}

export default AllClubsPage;