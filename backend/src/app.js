//Require Packages
const express = require('express')
const morgan = require('morgan')
const APP = express()
require('dotenv').config()

//Settings
APP.set('PORT',process.env.PORT || 3000)
APP.set('runServer',(req,res) => {
    console.log(`listening on port http://localhost:${APP.get('PORT')}`)
})

//Middlewares
APP.use(express.json())
APP.use(morgan('dev'))

//Exports
module.exports = APP;