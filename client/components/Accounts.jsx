import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccounts } from '../actions/accounts'

function Accounts() {

  const accounts = useSelector((store) => store.accounts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [])

  return (
    <>
      {accounts?.map((account) => {
        return (
          <>
            <h3>{account.name}</h3>
            <h3>{account.balance}</h3>
          </>
        )
      })}
    </>
  )
}

export default Accounts
