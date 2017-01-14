'use strict'
const User = use('App/Model/User')
const Flight = use('App/Model/Flight')

class UserController {

  * login(request, response) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = yield request.auth.attempt(email, password)
      if (token) {
        const user = yield User.findByOrFail('email', email)
        user.token = token;
        response.json(user)
      }
    } catch (e) {
      response.unauthorized({error: e.message})
    }
  }

  * buyTicket(request, response) {
    const user = yield request.auth.getUser()
    const flight_id = request.input('flight_id')
    let seats = request.input('seats')
    const now = new Date()

    const flight = yield Flight.findOrFail(flight_id)
    if (flight.departure_time <= now) {
      response.badRequest({message: 'Flight already departed'})
      return
    }

    const my_flight = yield user.Flight().where('id', flight_id).first()
    if (my_flight) {
      seats = request.input('seats') + my_flight._pivot_seats
      yield flight.User().detach([user.id])
    }

    yield flight.User().attach([user.id], {seats})
    response.json({message: 'Flight ticket was acquired'})
  }

  * myFlights(request, response) {
    const auth_user = yield request.auth.getUser()
    const my_flights = yield auth_user
      .Flight()
      .with('DepartureCity', 'DestinationCity')
      .fetch()
    response.json(my_flights)
  }

  * index(request, response) {
    //
  }

  * store(request, response) {

  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }
}

module.exports = UserController
