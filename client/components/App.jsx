import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../apis/users'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import Nav from './Nav'
import Register from './Register'
import Home from './Home'
import Accounts from './Accounts'
import NewAccount from './NewAccount'
import SelectedAccount from './SelectedAccount'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  image : {

    backgroundImage: 'url(https://566259-1852283-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/10/1-1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}))

  function App() {

    useCacheUser()
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  
    useEffect(() => {
      if (!isAuthenticated) {
        dispatch(clearLoggedInUser())
      } else {
        getAccessTokenSilently()
          .then((token) => getUser(token))
          .then((userInDb) => {
            userInDb
              ? dispatch(updateLoggedInUser(userInDb))
              : navigate('/register')
          })
          .catch((err) => console.error(err))
      }
    }, [isAuthenticated])

    const classes = useStyles()
  return (
     <>
      <div>
          <Nav />
      </div>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/new" element={<NewAccount />} />
          <Route path="/accounts/:id" element={<SelectedAccount />} />
        </Routes>
      </section>
    </>
  )
}

export default App
