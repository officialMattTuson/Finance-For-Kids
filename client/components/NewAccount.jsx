import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAccountThunk } from '../actions/accounts'

function AddAccount() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((store) => store.user.token)
  const [dataForm, setDataForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDataForm({
      ...dataForm,
    })
    await dispatch(addAccountThunk(dataForm, token))
    console.log(dataForm);
    navigate('/accounts')
  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section>
          <form>
            <h1 className="title">New Account Details</h1>
            <div>
              <label htmlFor="name" className="label">
                Account Name
              </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div>
              <label htmlFor="balance" className="label">
                Starting Balance
              </label>
                <input
                  type="number"
                  name="balance"
                  placeholder="0"
                  onChange={handleChange}
                />
              </div>
            {/* <div>
            <label htmlFor="account_type" className="label">
                Account Type
              </label>
                  <select name="account_type" id="type" onChange={handleChange}>
                    <option value="DEFAULT">Select an Option</option>
                    <option>Piggy Bank</option>
                    <option>Interest Gainer</option>
                    <option>Investor</option>
                    </select>
                </div> */}
                <button onClick={handleSubmit}>Create</button>
          </form>

    </section>
  )
}

export default AddAccount
