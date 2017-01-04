'use strict'

const Schema = use('Schema')

class CityFlightTableSchema extends Schema {

  up () {
    this.create('city_flight', (table) => {
      table.primary(['flight_id', 'city_id'])
      table.integer('flight_id').unsigned()
      table.integer('city_id').unsigned()

      table.foreign('flight_id').references('flights.id')
      table.foreign('city_id').references('cities.id')
    })
  }

  down () {
    this.drop('city_flight')
  }

}

module.exports = CityFlightTableSchema
