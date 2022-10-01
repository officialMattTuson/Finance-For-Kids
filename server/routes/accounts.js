const express = require('express')

const db = require('../db/accounts')
const router = express.Router()

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

module.exports = router