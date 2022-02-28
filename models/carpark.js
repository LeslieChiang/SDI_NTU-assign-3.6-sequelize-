const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./setup");

class Carpark extends Model {}

Carpark.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "address",
    },
    numOfSlot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "no_of_slot",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  {
    sequelize,
    modelName: "Carpark",
    tableName: "car_parks",
  }
);

module.exports = Carpark;
