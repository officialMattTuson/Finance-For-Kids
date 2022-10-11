import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateAccountThunk } from '../actions/accounts'

export default function UpdateBalance() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accounts = useSelector((store) => store.accounts)
    const token = useSelector((store) => store.user.token)
    const account = accounts[0]
    const [form, setForm] = useState(account)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateAccountThunk(form, token))
        navigate('/accounts')
    }
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="field">
                <label className="label mt-4" htmlFor="title">
                  New Balance:{' '}
                </label>
                <input
                className="input input-width"
                  type="text"
                  name="balance"
                  defaultValue={account.balance}
                  onChange={handleChange}
                />
              </div>
      </form>
    </div>
  )
}
