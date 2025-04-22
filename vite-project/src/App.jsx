import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AllClubsPage from './pages/AllClubsPage'
// import OneClubPage from './pages/OneClubPage'
// import AllFestsPage from './pages/AllFestsPage'
// import OneFestPage from './pages/OneFestPage'
// import AdminPage from './pages/AdminPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthContextProvider } from './context/AuthContext'


function App () {

  return (
    <AuthContextProvider>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path = '/' element = { <HomePage /> } />
          <Route path = '/signup' element = { <Signup /> } />
          <Route path = '/login' element = { <Login /> } />
          
          {/* Temporary route for Login while AdminPage is being built */}
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/login" element={<Login />} />

          <Route path = '/allclubs' element = { <AllClubsPage /> } >
            {/* <Route path = ':clubId' element = { <OneClubPage /> } /> */}
          </Route>

          {/* <Route path = '/allfests' element = { <AllFestsPage /> } >
            <Route path = ':festId' element = { <OneFestPage /> } />
          </Route> */}

          {/* <Route path = '/admin' element = { <AdminPage /> } > 
            <Route path = 'login' element = { <Login /> } />
            <Route path = 'signup' element = { <Signup /> } />
          </Route> */}

        </Routes>
      </div>
    </AuthContextProvider>
  )
}

export default App