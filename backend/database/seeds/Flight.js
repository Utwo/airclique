'use strict'

const Flight = use('App/Model/Flight')
const City = use('App/Model/City')
const Factory = use('Factory')
const Database = use('Database')

class FlightSeeder {
  *run() {
  }

  * go() {
    yield Database.table('flights').delete()

    const cluj = yield City.findBy('code', 'CLJ')
    const roma = yield City.findBy('code', 'CIA')
    const paris = yield City.findBy('code', 'BVA')
    const londra = yield City.findBy('code', 'LTN')
    const eindhoven = yield City.findBy('code', 'EIN')
    const budapesta = yield City.findBy('code', 'BUD')
    const berlin = yield City.findBy('code', 'SXF')
    const bruxelles = yield City.findBy('code', 'CRL')

    const flight1 = new Flight({
      'class': 'business',
      'seats_available': 100,
      'price': 600,
      'departure_time': new Date(2017, 1, 17, 12, 0),
      'arrival_time': new Date(2017, 1, 17, 14, 0),
    })

    yield cluj.DepartureFlight().save(flight1)
    yield paris.DestinationFlight().save(flight1)

    const flight2 = yield Flight.create({
      'class': 'economy',
      'seats_available': 400,
      'price': 200,
      'departure_time': new Date(2017, 1, 17, 18, 0),
      'arrival_time': new Date(2017, 1, 17, 19, 0),
    })

    yield londra.DepartureFlight().save(flight2)
    yield berlin.DestinationFlight().save(flight2)

    const flight3 = yield Flight.create({
      'class': 'first',
      'seats_available': 40,
      'price': 1500,
      'departure_time': new Date(2017, 1, 22, 11, 0),
      'arrival_time': new Date(2017, 1, 22, 12, 0),
    })
    yield bruxelles.DepartureFlight().save(flight3)
    yield budapesta.DestinationFlight().save(flight3)

    const flight4 = yield Flight.create({
      'class': 'business',
      'seats_available': 120,
      'price': 550,
      'departure_time': new Date(2017, 1, 10, 13, 0),
      'arrival_time': new Date(2017, 1, 10, 15, 0),
    })
    yield cluj.DepartureFlight().save(flight4)
    yield roma.DestinationFlight().save(flight4)

    const flight5 = yield Flight.create({
      'class': 'economy',
      'seats_available': 100,
      'price': 500,
      'departure_time': new Date(2017, 2, 21, 10, 0),
      'arrival_time': new Date(2017, 2, 21, 14, 0),
    })
    yield eindhoven.DepartureFlight().save(flight5)
    yield cluj.DestinationFlight().save(flight5)

    const flight6 = yield Flight.create({
      'class': 'business',
      'seats_available': 100,
      'price': 500,
      'departure_time': new Date(2017, 3, 1, 5, 0),
      'arrival_time': new Date(2017, 3, 1, 8, 0),
    })
    yield londra.DepartureFlight().save(flight6)
    yield paris.DestinationFlight().save(flight6)
  }
}

module.exports = FlightSeeder
