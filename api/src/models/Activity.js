const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
      ID:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dificulty:{
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false,
        validate:{
            notEmpty: true,
            notNull: true,
        }
      },
      duration:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            isInt: true,
            isNumeric: true,
        }
      },
      season:{
        type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
        allowNull: false,
        validate:{
            isIn: [['Verano','Otoño','Invierno','Primavera']],
            notEmpty: true,
        }
      }
      },{ timestamps: false }
    );
  };