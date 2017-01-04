'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  // hash password on save
  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'User.encryptPassword')
  }

  static get hidden() {
    return ['password']
  }

  Flight() {
    return this.belongsToMany('App/Model/Flight')
  }
}

module.exports = User
