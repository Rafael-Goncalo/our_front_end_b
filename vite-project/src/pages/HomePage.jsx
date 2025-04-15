import { Link } from 'react-router-dom'

function HomePage () {
    return (
        <div className='home-page'>
           <header>
            <h1>Welcome to Music Events</h1>
            </header>

            <section className='home-page-links'>
            <div className='link-card'>
                <h2>All Clubs</h2>
                <Link to='/allclubs'>View All Clubs</Link>
            </div>

            <div className="link-card">
                <h2>All Festivals</h2>
                <Link to="/allfests">View All Festivals</Link>
            </div>

        
            </section>   
        </div>
    )
}

export default HomePage