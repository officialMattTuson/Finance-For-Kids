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
      <div className="">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div id="navbarMenuHeroA" className="navbar-menu">
              {/* <div className="navbar-start">
                <Link className="navbar-item is-hoverable" to="/">
                  Home
                </Link>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Stories</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item" href="/map">
                      Search Story Map
                    </a>
                    <Link className="navbar-item" to="/stories">
                      Search by Region
                    </Link>
                    <IfAuthenticated>
                      <hr className="navbar-divider" />
                      <Link className="navbar-item" to="/add">
                        Add a Story
                      </Link>
                    </IfAuthenticated>
                    <IfAuthenticated>
                    <a className="navbar-item" href="/saved">
                    Saved Stories
                    </a>
                    </IfAuthenticated>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="navbar-end">
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
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav
