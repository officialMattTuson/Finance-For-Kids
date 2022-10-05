import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchOneAccount } from '../actions/accounts'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function SelectedAccount() {

    const { id } = useParams()
    const accounts = useSelector((store) => store.accounts)
    const account = accounts[0]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOneAccount(id))
        console.log(account);
    },[])
    return (
        <>
        <Card sx={{ width: 450, margin: '30px' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image="https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {account?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${account?.balance}
                    </Typography>
                    <IfAuthenticated>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(account.id)}
                      >
                        Delete
                      </Button>
                    </IfAuthenticated>
                  </CardContent>
                </CardActionArea>
              </Card>
        </>
    )
}

export default SelectedAccount
