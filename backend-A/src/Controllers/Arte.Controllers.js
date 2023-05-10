const Controlador = {}
const ArteModelo = require('../Models/Arte.Models')

Controlador.obtenerObra = async (req, res) => {
    const getObras = await ArteModelo.find()
    res.status(200).json({mensaje:'Son Todas las Obras:',Data: getObras})
}
Controlador.obtenerOneObra = async (req, res) => {
    const getOneObra = await ArteModelo.findOne({ idObra: req.params.idOb })
    console.log(getOneObra)
    if (getOneObra == null) res.status(404).json({mensaje:'Error En algun Codigo de Obtener uno'}) 
    else res.status(200).json({mensaje:'Obra Encontrada:',Data: getOneObra})
}
Controlador.guardarObras = async (req, res) => {
    const idObras = await ArteModelo.findOne({ idObra: req.body.idObra })
    if (idObras == null) {
        const guardaObra = new ArteModelo(req.body)
        await guardaObra.save()
        res.status(200).json({mensaje:'Obra Creada:', Data:guardaObra})
    } else res.status(404).json({mensaje:'Error En algun Codigo de Guardado'})
}
Controlador.actualizaObra = async (req, res) => {
    const actualizame = await ArteModelo.findOneAndUpdate({ idObra: req.params.idOb }, req.body)
    if (actualizame != null) res.status(200).json({mensaje:'Obra Actualizada:'})
    else res.status(404).json({mensaje:'Error En algun Codigo de Actualizar'})
}
Controlador.eliminaObra = async (req, res) => {
    const eliminame = await ArteModelo.findOneAndDelete({ idObra: req.params.idOb })
    if (eliminame != null) res.status(200).json({mensaje:'Obra Eliminada:',Data: eliminame})
    else res.status(404).json({mensaje:'Error En algun Codigo de Eliminado'})
}
module.exports = Controlador;