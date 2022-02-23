const { Router } = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router
  .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
  .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)

  .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculaPorTurma)
  .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
module.exports = router
