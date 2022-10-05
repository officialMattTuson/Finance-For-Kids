import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deleteAccountThunk, fetchOneAccount } from '../actions/accounts'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

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
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card sx={{ width: 850, margin: '30px' }}>
          <CardActionArea
            sx={{ width: '650', padding: '100px', backgroundColor: '#8BD3E6' }}
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
        <Card sx={{ width: 850, margin: '30px' }}
        variant="outlined">
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              benevolent
            </Typography>
            <Typography 
            color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default SelectedAccount
