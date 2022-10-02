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
      <div>
        {/* <h1 style={{ size: '40px' }}>FINANCE FOR KIDS</h1> */}
        <nav
          style={{
            display: 'flex',
            marginTop: '30px',
            backgroundColor: '#e9f542',
            padding: "25px",
            marginLeft: 0
          }}
        >
          <IfNotAuthenticated>
            <div>
              <Link
                to="/"
                style={{
                  marginRight: '80px',
                  textDecoration: 'none',
                }}
                onClick={handleSignIn}
              >
                <strong>Sign up</strong>
              </Link>
              <Link
                to="/"
                style={{
                  marginRight: '80px',
                  textDecoration: 'none',
                }}
                onClick={handleSignIn}
              >
                <b>Log in</b>
              </Link>
            </div>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <Link
              to="/accounts"
              style={{
                marginRight: '80px',
                textDecoration: 'none',
              }}
            >
              <strong>View Accounts</strong>
            </Link>
            <Link
              to="/accounts"
              style={{
                marginRight: '80px',
                textDecoration: 'none',
              }}
              className="button is-info"
            >
              <strong>Recent Transactions</strong>
            </Link>
            <Link
              to="/"
              onClick={handleLogOff}
              style={{
                marginRight: '80px',
                textDecoration: 'none',
              }}
            >
              <strong>Log Off</strong>
            </Link>
          </IfAuthenticated>
          <Link
            to="/"
            style={{
              marginRight: '80px',
              textDecoration: 'none',
            }}
          >
            <strong>Home</strong>
          </Link>
        <IfAuthenticated>
          <div style = {{
            position: 'relative',
            marginLeft: '1000px'}}>
          <strong>Hi {user?.username}</strong>
          </div>
        </IfAuthenticated>
        </nav>
      </div>
    </>
  )
}

export default Nav
