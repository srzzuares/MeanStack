const Ctll = {}
const SalaryModelo = require('../Models/Salary.Models')

Ctll.GetSalary = async (req, res) => {
    const Salary = await SalaryModelo.find()
    res.status(200).json({mensaje:'Son Todas los Registros:',Data: Salary})
}
Ctll.GetOneSalary = async (req, res) => {
    const getOneSalary = await SalaryModelo.findOne({ Id_Salary: req.params.idSa })
    console.log(getOneSalary)
    if (getOneSalary == null) res.status(404).json({mensaje:'Error En algun Codigo de Obtener uno'}) 
    else res.status(200).json({mensaje:'Datos Encontrados:',Data: getOneSalary})
}
Ctll.SaveSalary = async (req, res) => {
    const Id_Salary = await SalaryModelo.findOne({ Id_Salary: req.body.Id_Salary })
    if (Id_Salary == null) {
        const saveSalary = new SalaryModelo(req.body)
        await saveSalary.save()
        res.status(200).json({mensaje:'Dato Creada:', Data:saveSalary})
    } else res.status(404).json({mensaje:'Error En algun Codigo de Guardado'})
}
Ctll.PutSalary = async (req, res) => {
    const putSalary = await SalaryModelo.findOneAndUpdate({ Id_Salary: req.params.idSa }, req.body)
    if (putSalary != null) res.status(200).json({mensaje:'Datos Actualizados:'})
    else res.status(404).json({mensaje:'Error En algun Codigo de Actualizar'})
}
Ctll.DelSalary = async (req, res) => {
    const delSalary = await SalaryModelo.findOneAndDelete({ Id_Salary: req.params.idSa })
    if (delSalary != null) res.status(200).json({mensaje:'Datos Eliminados:',Data: delSalary})
    else res.status(404).json({mensaje:'Error En algun Codigo de Eliminado'})
}
module.exports = Ctll;