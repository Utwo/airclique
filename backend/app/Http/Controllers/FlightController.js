'use strict'
const Flight = use('App/Model/Flight')
const User = use('App/Model/User')

class FlightController {

  * index(request, response) {
    // get all upcoming flights
    const now = new Date()
    let flights = Flight.query().where('departure_time', '>', now)

    let search_inputs = request.all()
    for (let input in search_inputs) {
      if (search_inputs.hasOwnProperty(input)) {
        if (input === 'departure_time') {
          const departure_day = new Date(search_inputs[input])
          const departure_next = new Date(departure_day);
          departure_next.setDate(departure_day.getDate() + 1);
          flights.whereBetween(input, [departure_day, departure_next])
        } else if (input === 'seats') {
          // todo
        } else {
          flights.where(input, search_inputs[input])
        }
      }
    }

    flights = yield flights.fetch()
    response.json(flights)
  }

  * store(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = FlightController
