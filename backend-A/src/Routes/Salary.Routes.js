const { Router } = require('express')
const RooT = Router()
const Ctll = require('../Controllers/Salary.Controllers')

RooT.get('/', Ctll.GetSalary)
RooT.get('/obtAct/:idSa', Ctll.GetOneSalary)
RooT.post('/create', Ctll.SaveSalary)
RooT.post('/put/:idSa', Ctll.PutSalary)
RooT.get('/del/:idSa', Ctll.DelSalary)
module.exports = RooT;