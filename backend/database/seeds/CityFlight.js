'use strict'

const Factory = use('Factory')
const Database = use('Database')
const Flight = use('App/Model/Flight')
const City = use('App/Model/City')

class CityFlightSeeder {
  *run() {
  }

  * go() {
    yield Database.table('city_flight').delete()

    const cluj = yield City.findBy('code', 'CLJ')
    const roma = yield City.findBy('code', 'CIA')
    const paris = yield City.findBy('code', 'BVA')
    const londra = yield City.findBy('code', 'LTN')
    const eindhoven = yield City.findBy('code', 'EIN')
    const budapesta = yield City.findBy('code', 'BUD')
    const berlin = yield City.findBy('code', 'SXF')
    const bruxelles = yield City.findBy('code', 'SXF')

    const flight1 = yield Flight.find(1)
    yield flight1.DepartureCity().attach([cluj.id], {departure: 1})
    yield flight1.DestinationCity().attach([roma.id], {departure: 0})

    const flight2 = yield Flight.find(2)
    yield flight2.DepartureCity().attach([paris.id], {departure: 1})
    yield flight2.DestinationCity().attach([londra.id], {departure: 0})

    const flight3 = yield Flight.find(3)
    yield flight3.DepartureCity().attach([budapesta.id], {departure: 1})
    yield flight3.DestinationCity().attach([paris.id], {departure: 0})

    const flight4 = yield Flight.find(4)
    yield flight4.DepartureCity().attach([eindhoven.id], {departure: 1})
    yield flight4.DestinationCity().attach([cluj.id], {departure: 0})

    const flight5 = yield Flight.find(5)
    yield flight5.DepartureCity().attach([berlin.id], {departure: 1})
    yield flight5.DestinationCity().attach([paris.id], {departure: 0})

    const flight6 = yield Flight.find(6)
    yield flight6.DepartureCity().attach([cluj.id], {departure: 1})
    yield flight6.DestinationCity().attach([berlin.id], {departure: 0})
  }

}

module.exports = CityFlightSeeder
