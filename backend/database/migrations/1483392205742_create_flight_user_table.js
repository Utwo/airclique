'use strict'

const Schema = use('Schema')

class FlightUserTableSchema extends Schema {

  up () {
    this.create('flight_user', (table) => {
      table.primary(['flight_id', 'user_id'])
      table.integer('flight_id').unsigned()
      table.integer('user_id').unsigned()

      table.foreign('flight_id').references('flights.id')
      table.foreign('user_id').references('users.id')
    })
  }

  down () {
    this.drop('flight_user')
  }

}

module.exports = FlightUserTableSchema
