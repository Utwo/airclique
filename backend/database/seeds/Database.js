'use strict'

const UserSeed = require('./User');
const CitySeed = require('./City');
const FlightSeed = require('./Flight');
const CityFlightSeed = require('./CityFlight');
const FlightUserSeed = require('./FlightUser');

class DatabaseSeeder {

  * run () {
    yield new UserSeed().go();
    yield new CitySeed().go();
    yield new FlightSeed().go();
    yield new CityFlightSeed().go();
    yield new FlightUserSeed().go();
  }
}

module.exports = DatabaseSeeder
