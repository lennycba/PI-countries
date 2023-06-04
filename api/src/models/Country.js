const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country',{
    ID:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true,
        notEmpty:true,
        notNull: true,
      }
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:true,
        notNull: true,
        isAlpha: true,
      }
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:true,
        isAlpha: true,
      }
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    },{ timestamps: false }
  );
};
