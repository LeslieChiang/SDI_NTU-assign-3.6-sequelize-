const { sequelize, testConnection } = require("./models/setup");

// import from model directory
const Driver = require("./models/driver");
const Vehicle = require("./models/vehicle");
const Carpark = require("./models/carpark");
const ParkHistory = require("./models/parkhistory");

// Create associations
Vehicle.belongsTo(Driver, {
  foreignKey: "driverID",
});

Carpark.hasMany(ParkHistory, {
  foreignKey: "carParkID",
});

Vehicle.hasMany(ParkHistory, {
  foreignKey: "vehicleID",
});

(async () => {
  //   testConnection();

  //   await Vehicle.sync({ alter: true }); // require to SYNC initially
  //   await Driver.sync({ alter: true })
  //   await Carpark.sync({ alter: true });
  //   await ParkHistory.sync({ alter: true });

  const newDriver = await Driver.bulkCreate([
    {
      fullName: "Leslie Chiang",
      carLicenseNo: "S887766554JA",
    },
    {
      fullName: "SPUD",
      carLicenseNo: "666ABG98345435J",
    },
    {
      fullName: "Sick Boy",
      carLicenseNo: "7765JNBAUK",
    },
    {
      fullName: "Renton",
      carLicenseNo: "AJ88653434JZ",
    },
  ]);

  const newVehicle = await Vehicle.bulkCreate([
    {
      type: "Taxi",
      carPlateNo: "SHA1111Z",
      driverID: 1,
    },
    {
      type: "Van",
      carPlateNo: "GA7896Y",
      driverID: 2,
    },
    {
      type: "Bus",
      carPlateNo: "SBS1235U",
      driverID: 3,
    },
  ]);

  const newCarPark = await Carpark.bulkCreate([
    {
      address: "BLOCK 71, 71 Ayer Rajah Crescent, S(139951)",
      numOfSlot: 100,
    },
    {
      address: "The Sports Stage, 200 Pandan Gardens, S(609336)",
      numOfSlot: 250,
    },
    {
      address: "Shaw Centre, 1 Scotts Road, S(228208)",
      numOfSlot: 300,
    },
    {
      address: "PAssion WaVe @ Marina Bay, 11 Rhu Cross, S(437440)",
      numOfSlot: 85,
    },
    {
      address: "Airport South CP, 60 Airport Boulevard, S(819643)",
      numOfSlot: 325,
    },
  ]);

  const newParkHistory = await ParkHistory.bulkCreate([
    {
      slotNum: 23,
      carParkID: 5,
      vehicleID: 1,
    },
    {
      slotNum: 83,
      carParkID: 4,
      vehicleID: 2,
    },
    {
      slotNum: 23,
      carParkID: 3,
      vehicleID: 3,
    },
  ]);

  resultDriver = await Driver.findAll();
  console.log("\n\n attribute", JSON.stringify(resultDriver));
  resultCarPlate = await Vehicle.findAll({ attributes: ["carPlateNo"] }); // Selecting only "carPlateNo"
  console.log("\n\n attribute", JSON.stringify(resultCarPlate));
  resultTaxi = await Vehicle.findAll({ where: { type: "Taxi" } }); // Select records where type = "Truck"
  console.log("\n\n where", JSON.stringify(resultTaxi));
  resultSlotNum = await ParkHistory.findAll({ order: [["slotNum", "DESC"]] }); // select records order by carPlateNo in descending order
  console.log("\n order", JSON.stringify(resultSlotNum));
})();
