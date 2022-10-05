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
        <nav width = '100%'
          style={{
            display: 'flex',
            backgroundColor: '#8BD3E6',
            padding: "45px",
            marginLeft: '-12px',
            marginRight: '-12px',
            marginTop: '-15px',
            fontSize: '20px'
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
    </>
  )
}

export default Nav
