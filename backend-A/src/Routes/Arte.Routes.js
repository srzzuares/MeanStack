const { Router } = require('express')
const RooT = Router()
const Controlador = require('../Controllers/Arte.Controllers')

RooT.get('/', Controlador.obtenerObra)
RooT.get('/obtAct/:idOb', Controlador.obtenerOneObra)
RooT.post('/crear', Controlador.guardarObras)
RooT.post('/actualizar/:idOb', Controlador.actualizaObra)
RooT.get('/eliminar/:idOb', Controlador.eliminaObra)
module.exports = RooT;