'use strict'

const Lucid = use('Lucid')

class City extends Lucid {

  DepartureFlight() {
    return this.hasMany('App/Model/Flight', 'id', 'city_departure_id')
  }

  DestinationFlight() {
    return this.hasMany('App/Model/Flight', 'id', 'city_destination_id')
  }
}

module.exports = City
