'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/login', 'UserController.login')

Route.get('/flights', 'FlightController.index')

Route.group('auth-routes', () => {
//only authenticated
}).middleware('auth')
