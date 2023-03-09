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
  location: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: Sequelize.DATEONLY,
    validate: {
      isDate: true,
      isAfter: "2023-01-01",
      isBefore: "2024-01-01", // only specifying for the time being
    },
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
      "varies"
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
