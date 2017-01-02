'use strict'

const Schema = use('Schema')

class FlightsTableSchema extends Schema {

  up () {
    this.create('flights', (table) => {
      table.increments()
      table.enum('business', 'economy', 'first')
      table.integer('seats_available').unsigned()
      table.float('price').unsigned()
      table.timestamp('departure_time')
      table.timestamp('arrival_time')
      table.timestamps()
    })
  }

  down () {
    this.drop('flights')
  }

}

module.exports = FlightsTableSchema
