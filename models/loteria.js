'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loteria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Loteria.init({
    name: DataTypes.STRING,
    card: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loteria',
  });
  return Loteria;
};