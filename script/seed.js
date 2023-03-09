"use strict";

const { db } = require("../server/db");
const openMicSeed = require("./eventData");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");
  await openMicSeed();
  console.log(`seeded successfully`);
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
