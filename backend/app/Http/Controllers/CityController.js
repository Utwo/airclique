'use strict'

const City = use('App/Model/City')

class CityController {

  * index(request, response) {
    const cities =  yield City.all()
    response.json(cities)
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

module.exports = CityController
