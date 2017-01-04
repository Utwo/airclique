'use strict'
const User = use('App/Model/User')
const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {

  * run () {
    yield Database.truncate('users')

    yield User.create({
      'email': 'user1@example.com',
      'name': 'user1',
      'password': '123456'
    })
  }

}

module.exports = UserSeeder
