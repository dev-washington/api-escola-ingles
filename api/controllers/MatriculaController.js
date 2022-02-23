const Sequelize = require('sequelize')
const { MatriculasServices } = require('../services')
const mastriculasServices = new MatriculasServices()

class MatriculasController {
  static async pegaUmaMatricula (req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await mastriculasServices.pegaUmRegistro({
        id: Number(matriculaId),
        estudante_id: Number(estudanteId)
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula (req, res) {
    const { estudanteId } = req.params
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const novaMatriculaCriada = await mastriculasServices.criaRegistro(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMatricula (req, res) {
    const { estudanteId, matriculaId } = req.params
    const novaInfos = req.body
    try {
      await mastriculasServices.atualizaRegistro(novaInfos, {
        id: Number(matriculaId),
        estudante_id: Number(estudanteId)

      })
      return res.status(200).json({ mensagem: `id ${matriculaId} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMatricula (req, res) {
    const { matriculaId } = req.params
    try {
      await mastriculasServices.apagaRegistro(Number(matriculaId))
      return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraMatricula (req, res) {
    const { matriculaId } = req.params
    try {
      await mastriculasServices.restauraRegistro(Number(matriculaId))
      return res.status(200).json({ mensagem: `id ${matriculaId} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaMatriculaPorTurma (req, res) {
    const { turmaId } = req.params
    try {
      const todasAsMatriculas = await mastriculasServices
        .encontraEContaRegistros({

          turma_id: Number(turmaId),
          status: 'confirmado',
          limit: 20,
          order: [['estudante_id', 'DESC']]
        })
      return res.status(200).json(todasAsMatriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTurmasLotadas (req, res) {
    const lotacaoTurma = 2
    try {
      const turmasLotadas = await mastriculasServices.encontraEContaRegistros({ status: 'confirmado' },
        {
          attributes: ['turma_id'],
          group: ['turma_id'],
          having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
        })
      return res.status(200).json(turmasLotadas.count)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = MatriculasController
