const express = require('express')
const path = require('path')

const userRoutes = require('./routes/users')
const accountRoutes = require('./routes/accounts')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/accounts', accountRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

module.exports = server
