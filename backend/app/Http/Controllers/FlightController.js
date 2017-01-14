'use strict'
const Flight = use('App/Model/Flight')
const Database = use('Database')
const User = use('App/Model/User')
const City = use('App/Model/City')
const Validator = use('Validator')

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
          flights.onlyAvailableSeats(request.input('seats'))
        }else{
          flights.where(input, search_inputs[input])
        }
      }
    }

    flights = yield flights.takenSeats().with('DepartureCity', 'DestinationCity').fetch()

    response.json(flights)
  }

  * flight(request, response) {
    const id = request.param('id')
    const flight = yield Flight.query().takenSeats().with('DepartureCity', 'DestinationCity').where('id', id).first()

    response.json(flight)
  }

  * store(request, response) {
    const flightData = request.all()
    const validation = yield Validator.validate(flightData, Flight.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const flight = yield Flight.create(flightData)
    response.json(flight)
  }

  * destroy(request, response) {
    const flight = yield Flight.find(request.param('id'))
    yield flight.delete()
    response.json({message: 'The flight was cancelled'})
  }

}

module.exports = FlightController
