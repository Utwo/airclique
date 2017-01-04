'use strict'

const Factory = use('Factory')
const Database = use('Database')
const Flight = use('App/Model/Flight')
const User = use('App/Model/User')

class FlightUserSeeder {
  *run() {
  }

  * go() {
    yield Database.table('flight_user').delete()

    const flights = yield Flight.all()
    for (let flight of flights) {
      if(flight.id % 2){
        yield flight.User().attach([1])
      } else {
        yield flight.User().attach([2])
      }
    }
  }

}

module.exports = FlightUserSeeder
