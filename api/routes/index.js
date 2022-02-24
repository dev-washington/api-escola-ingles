const bodyParse = require('body-parser')
const pessoas = require('./PessoaRouter')
const niveis = require('./NivelRouter')
const turmas = require('./TurmaRouter')

module.exports = app => {
  app.use(
    bodyParse.json(),
    bodyParse.urlencoded({ extended: false }),
    pessoas,
    niveis,
    turmas
  )
}
