const OCLL = {}
const ObM = require('../models/obrasModel')

OCLL.obtenerObra = async (req, res) => { 
    const getObras = await ObM.find()
    res.json(getObras)
}
OCLL.obtenerOneObra = async (req, res) => { 
    const getOneObra = await ObM.findOne({idObra:req.params.idOb})
    if(getOneObra!=null){
        res.status(404).json({message:'No existe la obra'})
    }else{
        res.status(200).json({message:'Dato Encontrado', data: getOneObra})
    }
}
OCLL.guardarObras = async (req, res) => { 
    const idObras = await ObM.findOne({idObra:req.body.idObra})
    if(idObras!=null){
        const guardaObra = new ObM(req.body)
        await guardaObra.save()
        res.status(200).json({menssage: 'Obra Guardada',data:guardaObra})
    }else{
        res.status(404).json({message:'Ya existe la obra'})
    }
}
OCLL.actualizaObra = async (req, res) => { 
    const actualizame = await ObM.findOneAndUpdate({idObra:req.params.idOb},req.body)
    if(actualizame != null) res.status(200).json({message:'Dato actualizado', data: actualizame})
    else res.status(404).json({message:'No existe la obra'})
}
OCLL.eliminaObra = async (req, res) => { 
    const eliminame = await ObM.findOneDelete({idObra:req.params.idOb},req.body)
    if(eliminame!= null) res.status(200).json({message:'Dato eliminado', data: eliminame})
    else res.status(404).json({message:'No existe la obra'})
}
module.exports= OCLL;