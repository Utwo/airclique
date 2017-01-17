'use strict'

const City = use('App/Model/City')

class CityController {

  * index(request, response) {
    const cities =  yield City.all()
    response.json(cities)
  }
}

module.exports = CityController
