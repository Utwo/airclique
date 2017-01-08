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
      'email': 'eliza@email.com',
      'name': 'eliza',
      'password': '123456'
    })
    yield User.create({
      'email': 'razvan@email.com',
      'name': 'razvan',
      'password': '123456'
    })
    yield User.create({
      'email': 'mihai@email.com',
      'name': 'mihai',
      'password': '123456'
    })
    yield User.create({
      'email': 'oana@email.com',
      'name': 'oana',
      'password': '123456'
    })
    yield User.create({
      'email': 'admin@email.com',
      'name': 'admin',
      'password': '123456',
      'is_admin': true
    })
  }
}

module.exports = UserSeeder
