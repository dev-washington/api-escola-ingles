/* eslint-disable camelcase */
const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TurmaController {
  static async pegaTodasAsTurmas (req, res) {
    const { data_inicial, data_final } = req.query
    const where = {}
    // eslint-disable-next-line no-unused-expressions
    data_inicial || data_final ? where.data_inicio = {} : null
    // eslint-disable-next-line no-unused-expressions
    data_inicial ? where.data_inicio[Op.get] = data_inicial : null
    // eslint-disable-next-line no-unused-expressions
    data_final ? where.data_inicio[Op.lte] = data_final : null
    try {
      const todasAsTrumas = await database.Turmas.findAll({ where })
      return res.status(200).json(todasAsTrumas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaTurma (req, res) {
    const { id } = req.params
    try {
      const umaTurma = await database.Turmas.findOne({ where: { id: Number(id) } })
      return res.status(200).json(umaTurma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaTurma (req, res) {
    const novaTurma = req.body
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma)
      return res.status(200).json(novaTurmaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurma (req, res) {
    const { id } = req.params
    const novaInfos = req.body
    try {
      await database.Turmas.update(novaInfos, { where: { id: Number(id) } })
      const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } })
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaTurma (req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TurmaController
