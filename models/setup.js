// import sequelize
const { Sequelize } = require("sequelize");

// DB connection config
const sequelize = new Sequelize("lesson3_6", "leslie", "", {
  host: "localhost",
  dialect: "postgres",
});

testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully!");
    return true;
  } catch (error) {
    console.log("Unable to connect to DB", error);
    return false;
  }
};

// testConnection();

module.exports = {
  sequelize,
  testConnection,
};
