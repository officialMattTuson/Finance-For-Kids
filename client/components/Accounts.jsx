import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccounts } from '../actions/accounts'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Accounts() {

  const accounts = useSelector((store) => store.accounts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [])

  return (
    <>
    <div style= {{
      display: 'flex',
      margin: "30px",
      flexWrap: "wrap"
    }}>
      {accounts?.map((account) => {
        return (
          <>
             <Card sx={{ maxWidth: 345, margin: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {account.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${account.balance}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    <br></br>
          </>
        )
      })}
      </div>
    </>
  )
}

export default Accounts
