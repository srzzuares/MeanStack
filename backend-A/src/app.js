//Require Packages
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const viewPath = path.join(__dirname, '/views/')
const APPLICATION = express()
require('dotenv').config()

//Settings
APPLICATION.set('PORT', process.env.PORT || 3333)
APPLICATION.set('view engine', 'ejs')
APPLICATION.set('views', viewPath)
APPLICATION.set('runServer', (req, res) => {
    console.log(`listening on port http://localhost:${APPLICATION.get('PORT')}`)
})
//Middlewares
APPLICATION.use(express.json())
APPLICATION.use(express.urlencoded({extended:false}))
APPLICATION.use(morgan('dev'))
APPLICATION.use(require('./Routes/Salary.Routes'))
//https://github.com/Juandiego001/aplicacion-full-stack
//Exports
module.exports = APPLICATION;