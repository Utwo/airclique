'use strict'

const Schema = use('Schema')

class CitiesTableSchema extends Schema {

  up () {
    this.create('cities', (table) => {
      table.increments()
      table.string('name')
      table.string('country')
      table.string('code', 3)
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }

}

module.exports = CitiesTableSchema
