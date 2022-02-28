const { DataTypes } = require("sequelize");
const { sequelize } = require("./setup");

const ParkHistory = sequelize.define(
  "parking_histories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slotNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "slot_no",
    },
    carParkID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "car_park_id",
    },
    vehicleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "vehicle_id",
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
  { sequelize, 
    modelName: "ParkHistory", 
    tableName: "parking_histories" }
);

module.exports = ParkHistory;
