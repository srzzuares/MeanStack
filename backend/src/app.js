//Require Packages
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const viewPath = path.join(__dirname, '/views/')
const APP = express()
require('dotenv').config()

//Settings
APP.set('PORT', process.env.PORT || 3000)
APP.set('view engine', 'ejs')
APP.set('views', viewPath)
APP.set('runServer', (req, res) => {
    console.log(`listening on port http://localhost:${APP.get('PORT')}`)
})
//Middlewares
APP.use(express.json())
APP.use(express.urlencoded({extended:false}))
APP.use(morgan('dev'))
APP.use(require('./routes/obras.Routes'))
//Exports
module.exports = APP;