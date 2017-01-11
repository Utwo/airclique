'use strict'

const Lucid = use('Lucid')
const Database = use('Database')

class Flight extends Lucid {
  * remaining() {
    let seats_taken = yield Database.from('flight_user').where({flight_id: this.id}).sum('seats as seats')
    this.remaining_seats = this.seats_available - seats_taken[0].seats
  };

  static scopeTakenSeats (builder) {
    builder.select('*').innerJoin('flight_user', 'flights.id', 'flight_user.flight_id').sum('flight_user.seats as taken_seats')
  }

  static get rules () {
    return {
      class: 'required|in:first,business,economy',
      seats_available: 'required|integer',
      price: 'required|integer',
      departure_time: 'required|date_format',
      arrival_time: 'required|date_format',
      city_destination_id: 'required|integer',
      city_departure_id: 'required|integer',
    }
  }

  User() {
    return this.belongsToMany('App/Model/User').withPivot('seats')
  }

  DestinationCity() {
    return this.belongsTo('App/Model/City', 'id', 'city_destination_id')
  }

  DepartureCity() {
    return this.belongsTo('App/Model/City', 'id', 'city_departure_id')
  }
}

module.exports = Flight
