const { Router } = require('express')
const rooteable = Router()
const OCLL = require('../controllers/obrasControllers')

rooteable.get('/', OCLL.obtenerObra)
rooteable.get('/obtAct/:idOb', OCLL.obtenerOneObra)
rooteable.post('/crear', OCLL.guardarObras)
rooteable.post('/actualizar/:idOb', OCLL.actualizaObra)
rooteable.get('/eliminar/:idOb', OCLL.eliminaObra)
module.exports = rooteable;