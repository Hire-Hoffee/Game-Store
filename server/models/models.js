const { DataTypes } = require('sequelize')
const tableCreation = require('../config/database')

const team = tableCreation.define("team", { 
  team_name: DataTypes.STRING 
})

const player = tableCreation.define("player", { 
  player_name: DataTypes.STRING 
})

team.hasMany(player)
player.belongsTo(team)

module.exports = {
  tableCreation
}