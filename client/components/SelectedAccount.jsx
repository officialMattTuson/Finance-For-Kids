import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deleteAccountThunk, fetchOneAccount } from '../actions/accounts'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, ButtonGroup } from '@mui/material'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  buttonStyling: {
    width: '100%',
    marginBottom: '50px',
  },
}))

function SelectedAccount() {
  const { id } = useParams()
  const accounts = useSelector((store) => store.accounts)
  const account = accounts[0]
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchOneAccount(id))
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteAccountThunk(id))
    navigate('/accounts')
  }

  const classes = useStyles()
  return (
    <>
      <div>
        <Card sx={{ width: 750, margin: '30px' }}>
          <CardActionArea
            sx={{ width: '650', padding: '40px', backgroundColor: '#FCF5E5', borderRadius: '10%' }}
          >
            <CardMedia
              component="img"
              height="340"
              image="https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {account?.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <h2>${account?.balance}</h2>
              </Typography>
              <IfAuthenticated>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(account?.id)}
                >
                  Delete
                </Button>
              </IfAuthenticated>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 750, margin: '30px' }} variant="outlined">
          <CardContent>
            <Typography >
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
                style={{ display: 'flex', flexWrap: 'noWrap' }}
              >
                <Button
                  style={{
                    width: '100%',
                    padding: '30px',
                  }}
                  variant="contained"
                  onClick={() => handleDelete(account?.id)}
                >
                  Pay Pocket Money
                </Button>
                <br></br>
                <Button
                  style={{
                    width: '100%',
                    padding: '30px',
                  }}
                  variant="contained"
                  onClick={() => handleDelete(account?.id)}
                >
                  Interest Calculator
                </Button>
                <br></br>
                <Button
                  style={{
                    width: '100%',
                    padding: '30px',
                  }}
                  variant="contained"
                  onClick={() => handleDelete(account?.id)}
                >
                  Invest
                </Button>
                <br></br>
                <Button
                  style={{
                    width: '100%',
                    padding: '30px',
                  }}
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(account?.id)}
                >
                  WithDraw
                </Button>
                <br></br>
                <Button
                  style={{ width: '100%', padding: '30px' }}
                  href="/accounts"
                  variant="contained"
                  color="success"
                >
                  Return
                </Button>
              </ButtonGroup>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SelectedAccount
