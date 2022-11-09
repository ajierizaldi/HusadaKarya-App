'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    treatment_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    anamnesa: DataTypes.STRING,
    diagnosis: DataTypes.STRING,
    therapy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};