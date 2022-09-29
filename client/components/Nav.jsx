import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const user = useSelector((state) => state?.user)
  const { logout, loginWithRedirect } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <nav>
        <div className="navbar-item">
          <IfNotAuthenticated>
            <div style = {{
                  marginRight: "0"

              }}className="buttons">
              <Link
                to="/"
                style = {{
                  marginRight: "20px"

              }}
                onClick={handleSignIn}
                className="button is-info"
              >
                <strong>Sign up</strong>
              </Link>
              <Link
                to="/"
                onClick={handleSignIn}
                className="button is-link"
              >
                <b>Log in</b>
              </Link>
            </div>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <p className="navbar-item">Hi {user?.username}</p>
            <Link
              className="button is-link"
              to="/"
              onClick={handleLogOff}
            >
              Log off
            </Link>
          </IfAuthenticated>
        </div>
      </nav>
    </>
  )
}

export default Nav
