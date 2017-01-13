'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/login', 'UserController.login')

Route.get('/cities', 'CityController.index')

Route.get('/flights', 'FlightController.index')
Route.get('/flights/:id', 'FlightController.flight')

Route.group('auth-routes', () => {
//only authenticated
  Route.post('/user/buy', 'UserController.buyTicket')
  Route.get('/user/flights', 'UserController.myFlights')
}).middleware('auth')

Route.group('admin-routes', () => {
//only admin
  Route.post('/flights', 'FlightController.store')
  Route.delete('/flights/:id', 'FlightController.destroy')

}).middleware('admin_auth')
