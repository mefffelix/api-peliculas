const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pelicula = sequelize.define('Pelicula', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING
  },
  anio: {
    type: DataTypes.INTEGER
  }
});

module.exports = Pelicula;