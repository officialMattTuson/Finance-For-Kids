const express = require('express')

const db = require('../db/accounts')
const router = express.Router()

router.get('/',(req,res)=> {
    db.getAccounts()
    .then((result)=> {
        res.json(result)
    })
} )

router.get('/:user_id' , (req,res) => {
    const id = req.params.user_id
    db.getOneAccount(id)
    .then((result)=> {
        res.json(result)
    })
    .catch((err) => {
        console.error(err.message)
    })
})

router.post('/', async (req, res) => {
    try {
      const auth0_id = req.user?.sub
  
      const {
        name,
        balance,
      } = req.body
  
      const accountData = {
        name,
        balance,
        auth0_id,
      }
      console.log(accountData)
      const idArr = await db.addAccount(accountData)
      console.log(idArr)
      const newAccount = await db.getOneAccount(idArr)
      const result = await db.getAccounts()
      res.json(result)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deleteAccount = await db.deleteAccount(id)
        res.json(deleteAccount)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
    })
    
module.exports = router