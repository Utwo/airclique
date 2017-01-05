'use strict'
const Hash = use('Hash')

const User = module.exports = {}

User.encryptPassword = function * (next) {
  this.password = yield Hash.make(this.password)
  yield next
}
