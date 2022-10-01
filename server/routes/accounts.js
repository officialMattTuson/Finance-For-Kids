const express = require('express')

const db = require('../db/accounts')
const router = express.Router()

router.get('/name',(req,res)=> {
    db.getAccounts()
    .then((result)=> {
        res.json(result)
    })
} )

router.get('/', (req,res) => {
    db.getAllAccountBalances()
    .then((result)=> {
        res.json(result)
    })
    .catch((err) => {
        console.error(err.message)
    })
})

router.get('/:user_id' , (req,res) => {
    const id = req.params.user_id
    db.getAccountBalance(id)
    .then((result)=> {
        res.json(result)
    })
    .catch((err) => {
        console.error(err.message)
    })
})

router.post('/', (req, res) => {
    const data = req.body
    data.id = req.body.id
    data.name = req.body.name
    data.user_id = req.body.user_id
    data.balance = req.body.user_id    
    db.addAccount(data).then((result) => {
            res.json(data)
        })
    })


module.exports = router