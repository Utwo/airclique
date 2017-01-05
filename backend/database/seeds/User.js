'use strict'

const User = use('App/Model/User')
const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  *run() {
  }

  * go() {
    yield Database.table('users').delete()

    yield User.create({
      'email': 'user1@example.com',
      'name': 'user1',
      'password': '123456'
    })
    yield User.create({
      'email': 'user2@example.com',
      'name': 'user2',
      'password': '123456'
    })
  }
}

module.exports = UserSeeder
