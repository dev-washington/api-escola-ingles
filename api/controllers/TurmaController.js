/* eslint-disable camelcase */
const { TurmasServices } = require('../services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TurmaController {
  static async pegaTodasAsTurmas (req, res) {
    // eslint-disable-next-line camelcase
    const { data_inicial, data_final } = req.query
    const where = {}
    // eslint-disable-next-line camelcase
    // eslint-disable-next-line no-unused-expressions
    data_inicial || data_final ? where.data_inicio = {} : null
    // eslint-disable-next-line no-unused-expressions
    data_inicial ? where.data_inicio[Op.get] = data_inicial : null
    // eslint-disable-next-line no-unused-expressions
    data_final ? where.data_inicio[Op.lte] = data_final : null
    try {
      const todasAsTrumas = await TurmasServices.pegaTodosOsRegistros(where)
      return res.status(200).json(todasAsTrumas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaTurma (req, res) {
    const { id } = req.params
    try {
      const umaTurma = await TurmasServices.pegaUmRegistro({ id })
      return res.status(200).json(umaTurma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaTurma (req, res) {
    const novaTurma = req.body
    try {
      const novaTurmaCriada = await TurmasServices.criaRegistro(novaTurma)
      return res.status(200).json(novaTurmaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurma (req, res) {
    const { id } = req.params
    const novaInfos = req.body
    try {
      await TurmasServices.atualizaRegistro(novaInfos, id)
      return res.status(200).json({ mensagem: `ìd ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaTurma (req, res) {
    const { id } = req.params
    try {
      await TurmasServices.apagaRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TurmaController
