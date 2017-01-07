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
    const user1 = yield User.findBy('name', 'mihai')
    const user2 = yield User.findBy('name', 'oana')
    const user3 = yield User.findBy('name', 'eliza')
    const user4 = yield User.findBy('name', 'razvan')

    const flights = yield Flight.all()
    for (let flight of flights) {
      if (flight.id % 4 === 0) {
        yield flight.User().attach([user1.id])
      } else if (flight.id % 4 === 1) {
        yield flight.User().attach([user2.id])
      }else if (flight.id % 4 === 2) {
        yield flight.User().attach([user3.id])
      } else {
        yield flight.User().attach([user4.id])
      }
    }
  }

}

module.exports = FlightUserSeeder
