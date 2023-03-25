const {Router} = require('express')
const rooteable = Router()
const OCLL = require('../controllers/obrasControllers')

rooteable.get('/obras',OCLL.obtenerObra)
rooteable.get('/obras/:idOb',OCLL.obtenerOneObra)
rooteable.post('/obras',OCLL.guardarObras)
rooteable.put('/obras/idOb',OCLL.actualizaObra)
rooteable.delete('/obras/idOb',OCLL.eliminaObra)
module.exports=rooteable;