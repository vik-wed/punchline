const Sequelize = require("sequelize");
const db = require("../db");

const OpenMic = db.define("openmic", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  venue: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATEONLY,
  },
  time: {
    type: Sequelize.TIME,
  },
  weekday: {
    type: Sequelize.ENUM(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "varies",
      "null"
    ),
  },
  price: {
    type: Sequelize.STRING,
  },
  signup: {
    type: Sequelize.TEXT,
  },
  setTime: {
    type: Sequelize.INTEGER,
  },
  social: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
      contains: "instagram",
    },
  },
  recurring: {
    type: Sequelize.STRING,
  },
  categories: {
    type: Sequelize.TEXT,
  },
});

module.exports = OpenMic;
