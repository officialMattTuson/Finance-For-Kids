import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAccountThunk, fetchAccounts } from '../actions/accounts'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Accounts() {
  const token = useSelector((store) => store.user.token)
  const accounts = useSelector((store) => store.accounts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [])


  return (
    <>
      <div
        style={{
          display: 'flex',
          margin: '30px',
          marginTop: '130px',
          flexWrap: 'wrap',
        }}
      >
        {accounts?.map((account) => {
          return (
            <>
            <Link to = {`/accounts/${account.id}`} style={{ textDecoration: 'none' }} key={account.id}>
              <Card sx={{ width: 450, margin: '30px' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image="https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {account.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${account.balance}
                    </Typography>
                    <h3>Click to view Account Details and Actions</h3>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Link>
              <br></br>
            </>
          )
        })}
        <IfAuthenticated>
          <Link to="/accounts/new">
            <AddIcon
              style={{
                position: 'relative',
                top: '240px',
                left: '50px',
                border: 'double',
                borderRadius: '100%',
                backgroundColor: 'green',
                color: 'white',
                padding: '4px',
                cursor: 'pointer',
              }}
              color="success"
              fontSize="large"
            />
          </Link>
        </IfAuthenticated>
      </div>
    </>
  )
}

export default Accounts
