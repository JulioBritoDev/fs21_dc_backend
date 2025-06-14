const express = require('express')
const UsuariosRoute = require('./UsuariosRoute')
const AutoresRoute = require('./AutoresRoute')
const EditoresRoute = require('./EditoresRoute')
const LivrosRoute = require('./LivrosRoute')
const AutenticacaoMiddleware = require('../middleware/AutenticacaoMiddleware')

const PrivateRoute = express.Router()
PrivateRoute.use(AutenticacaoMiddleware)
PrivateRoute.use(UsuariosRoute)
PrivateRoute.use(AutoresRoute)
PrivateRoute.use(EditoresRoute)
PrivateRoute.use(LivrosRoute)

module.exports = PrivateRoute