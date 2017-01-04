'use strict'

const Flight = use('App/Model/Flight')
const Factory = use('Factory')
const Database = use('Database')

class FlightSeeder {
  *run() {
  }

  * go() {
    yield Database.table('flights').delete()

    yield Flight.create({
      'class': 'business',
      'seats_available': 100,
      'price': 600,
      'departure_time': new Date(2017, 1, 17, 12, 0),
      'arrival_time': new Date(2017, 1, 17, 14, 0),
    })
    yield Flight.create({
      'class': 'economy',
      'seats_available': 400,
      'price': 200,
      'departure_time': new Date(2017, 2, 2, 8, 0),
      'arrival_time': new Date(2017, 2, 2, 10, 0),
    })
    yield Flight.create({
      'class': 'first',
      'seats_available': 40,
      'price': 1500,
      'departure_time': new Date(2017, 1, 22, 11, 0),
      'arrival_time': new Date(2017, 1, 22, 12, 0),
    })
    yield Flight.create({
      'class': 'business',
      'seats_available': 120,
      'price': 550,
      'departure_time': new Date(2017, 1, 10, 13, 0),
      'arrival_time': new Date(2017, 1, 10, 15, 0),
    })
    yield Flight.create({
      'class': 'economy',
      'seats_available': 100,
      'price': 500,
      'departure_time': new Date(2017, 2, 21, 10, 0),
      'arrival_time': new Date(2017, 2, 21, 14, 0),
    })
    yield Flight.create({
      'class': 'business',
      'seats_available': 100,
      'price': 500,
      'departure_time': new Date(2017, 3, 1, 5, 0),
      'arrival_time': new Date(2017, 3, 1, 8, 0),
    })
  }

}

module.exports = FlightSeeder
