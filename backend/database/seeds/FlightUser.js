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
    const user1 = yield User.findBy('name', 'user1')
    const user2 = yield User.findBy('name', 'user2')

    const flights = yield Flight.all()
    for (let flight of flights) {
      if (flight.id % 2) {
        yield flight.User().attach([user1.id])
      } else {
        yield flight.User().attach([user2.id])
      }
    }
  }

}

module.exports = FlightUserSeeder
