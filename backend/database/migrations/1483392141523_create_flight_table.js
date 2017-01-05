'use strict'

const Schema = use('Schema')

class FlightsTableSchema extends Schema {

  up () {
    this.create('flights', (table) => {
      table.increments()
      table.enu('class',['business', 'economy', 'first'])
      table.integer('seats_available').unsigned()
      table.float('price').unsigned()
      table.dateTime('departure_time')
      table.dateTime('arrival_time')
      table.timestamps()

      table.integer('city_departure_id').unsigned()
      table.integer('city_destination_id').unsigned()

      table.foreign('city_departure_id').references('cities.id')
      table.foreign('city_destination_id').references('cities.id')
    })
  }

  down () {
    this.drop('flights')
  }

}

module.exports = FlightsTableSchema
