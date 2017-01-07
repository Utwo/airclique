'use strict'
const Flight = use('App/Model/Flight')
const Database = use('Database')
const User = use('App/Model/User')
const City = use('App/Model/City')

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

    let result_flights = [];
    for (let flight of flights) {
      flight.departure_city = yield City.find(flight.city_departure_id)
      flight.destination_city = yield City.find(flight.city_destination_id)
      // remaining seats
      const sum = yield Database.from('flight_user').where({flight_id: flight.id}).sum('seats as seats')
      flight.remaining_seats = flight.seats_available - sum[0].seats;
      
      result_flights.push(flight);
    }

    response.json(flights)
  }

  * flight(request, response) {
    const id = request.param('id')
    const flight = yield Flight.find(id)

    flight.departure_city = yield City.find(flight.city_departure_id)
    flight.destination_city = yield City.find(flight.city_destination_id)

    const sum = yield Database.from('flight_user').where({flight_id: flight.id}).sum('seats as seats')
    flight.remaining_seats = flight.seats_available - sum[0].seats;

    response.json(flight)
  }

  * store(request, response) {
    const user = yield request.auth.getUser()
    if (!user.is_admin) {
      response.unauthorized({message: "You are not authorized to use this route"})
      return
    }

    const departure = yield City.findBy('code', request.input('departure_code'))
    const destination = yield City.findBy('code', request.input('arrival_code'))

    const flight = new Flight({
      'class': request.input('class'),
      'seats_available': request.input('seats'),
      'price': request.input('price'),
      'departure_time': new Date(request.input('departure_time')),
      'arrival_time': new Date(request.input('arrival_time')),
    })

    yield departure.DepartureFlight().save(flight)
    yield destination.DestinationFlight().save(flight)

    response.json(flight)
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    const user = yield request.auth.getUser()
    if (!user.is_admin) {
      response.unauthorized({message: "You are not authorized to use this route"})
      return
    }

    const flight = yield Flight.find(request.param('id'))
    yield flight.delete()
    response.json({message: 'The flight was cancelled'})
  }

}

module.exports = FlightController
