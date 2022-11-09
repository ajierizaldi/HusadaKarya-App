'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medicine.init({
    medicine_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    exp_year: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'medicine',
  });
  return medicine;
};