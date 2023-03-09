//this is the access point for all things database related!

const db = require("./db");
// model imports
const OpenMic = require("./models/OpenMic");
//associations could go here!

module.exports = {
  db,
  models: { OpenMic },
};
