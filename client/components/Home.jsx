import * as React from 'react'
import { useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Button, CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Divider, Icon } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  colorTitle: {
    color: '#8BD3E6',
    textDecorationLine: 'underline',
    textDecorationColor: '#072A6C'
  },
  colorBase: {
    color: '#072A6C',
    // textDecorationLine: 'underline',
    // textDecorationColor: '#8BD3E6'
  },
  headerStyle : {
    fontFamily: 'Nunito Sans', 
    fontWeight: 'bold',
    margin: '100px', 
    fontSize: '100px',
    
  },
  section: {
    display: 'flex',
    justifyContent: 'space-around', 
    width: '100%'
  },
  cardStyles : { 
    width: 350,
    }
}))

function Home() {
  const [age, setAge] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleChange = (event) => {
    setAge(event.target.value)
    setToggle(true)

  }
  const classes = useStyles()

  return (
    <>
    <div style={{width: '100%', textAlign: 'center'}}>
      <h1 className={classes.headerStyle}><span className = {classes.colorBase}>FINANCE</span><span className={classes.colorTitle}>FOR</span><span className = {classes.colorBase}>KIDS</span></h1>
    </div>
      <section className={classes.section}>
        <Link to = '/accounts' style = {{textDecoration: 'none'}}>

      <Card className = {classes.cardStyles} style = {{backgroundColor: '#8BD3E6'}}>
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="150"
                    image="https://566259-1852283-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/10/1-1.jpg"
                    /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div" textAlign = 'center' >
                    <h1>Welcome</h1>
                    </Typography>
                    <Typography variant="body1" fontWeight='bold' color="text.secondary">
                      Welcome to Finance For Kids. A platform designed to equip kids with
                      the skills and confidence to talk money and grow their skills and
                      knowledge of all things business and finance from younger ages. Lets
                      get kids talking about money and setting them up for a more
                      successful earning and spending career. Select Your targeted Age and
                      Lets Get Started!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
                  </Link>
                  <Link to = '/accounts' style = {{textDecoration: 'none'}}>
              <Card sx={{ width: 350, backgroundColor: '#8BD3E6' }}>
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="150"
                    image="https://566259-1852283-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/10/1-1.jpg"
                    /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div" textAlign = 'center'>
                    <h1>Pocket Money <br></br>Savers</h1>
                    </Typography>
                    <Typography variant="body1" fontWeight='bold' color="text.secondary">
                      Pocket Money that your kids earn for their weekly set of chores can now accumulate in these accounts.  Kids can be educated
                      on how to use and maximise their assets, but always can withdraw it for a good enough reason  .  Don't forget to keep your kids in the loop about their hard earned dollars
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Link>
              <Link to = '/accounts' style = {{textDecoration: 'none'}}>
              <Card sx={{ width: 350, backgroundColor: '#8BD3E6' }}>
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="150"
                    image="https://566259-1852283-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/10/1-1.jpg"
                  /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div" textAlign = 'center'>
                    <h1>Investing For <br></br>Newbies</h1>
                    </Typography>
                    <Typography variant="body1" fontWeight='bold' color="text.secondary">
                      Kids don't learn about investing until they're fully grown.  And EVEN then, they may not learn about ways
                      to make their money work.  Take your kids on a journey sooner, rather than later, to discover the wonderful
                      world of investing, the stock market and even maybe a crypto tour.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Link>
              
       
      </section>
      <br></br>
      {/* <Box sx={{ width: 120 }}>
        <FormControl sx={{ width: 120 }}>
          <InputLabel id="simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={5}>5-10</MenuItem>
            <Divider/>
            <MenuItem value={10}>10-13</MenuItem>
            <Divider/>
            <MenuItem value={15}>13-18</MenuItem>
            <Divider/>
            <MenuItem value={20}>18+</MenuItem>
          </Select>
        </FormControl>
        <div>
          {!toggle && (
            <Link to="/">
              <Button variant="contained" disabled>
                Lets Get Started
              </Button>
            </Link>
          )}
          {toggle && (
            <Link to="/accounts">
              <Button variant="contained" color = "success">Lets Get Started</Button>
            </Link>
          )}
        </div>
      </Box> */}
    </>
  )
}

export default Home
