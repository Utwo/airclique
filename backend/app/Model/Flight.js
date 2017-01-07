'use strict'

const Lucid = use('Lucid')

class Flight extends Lucid {

  User() {
    return this.belongsToMany('App/Model/User').withPivot('seats')
  }

  DepartureCity() {
    return this.belongsTo('App/Model/City', 'id', 'city_departure_id')
  }

  DestinationCity() {
    return this.belongsTo('App/Model/City', 'id', 'city_destination_id')
  }
}

module.exports = Flight
