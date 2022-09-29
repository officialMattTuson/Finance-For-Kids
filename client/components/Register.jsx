import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateLoggedInUser } from '../actions/loggedInUser'
import { addUser } from '../apis/users'

function Register() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: ''
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.username) navigate('/')
  }, [user])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const userInfo = {
      auth0_id: user.auth0_id,
      email: user.email,
      ...form
    }
    addUser(userInfo, user.token)
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
    <div className="container">
      <div className="section is-medium m-6">
      {errorMsg && <p onClick={hideError}>Error: {errorMsg}</p>}
      <form onSubmit={handleSubmit}>

            <div className="box p-4 m-4">
              <div className="mx-3">
              <h3 className="subtitle is-3">Create Your Profile</h3>
              <h5 className="subtitle is-5">Enter Your New Username Below</h5>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="username123"
                      onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <button
                    className="button is-light mt-5"
                    disabled={!form.username}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
