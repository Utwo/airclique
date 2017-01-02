'use strict'

const Lucid = use('Lucid')

class Flight extends Lucid {

  User () {
    return this.belongsToMany('App/Model/User')
  }

  DepartureCity () {
    return this.belongsTo('App/Model/City', 'city_departure_id')
  }

  DestinationCity () {
    return this.belongsTo('App/Model/City', 'city_destination_id')
  }
}

module.exports = Flight
