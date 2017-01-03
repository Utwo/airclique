'use strict'
const User = use('App/Model/User')

class UserController {

  * login(request, response) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = yield request.auth.attempt(email, password)
      if (token) {
        const user = yield User.findByOrFail('email', email)
        user.token = token;
        response.json(user)
      }
    } catch (e) {
      response.unauthorized({error: e.message})
    }
  }

  * index(request, response) {
    //
  }

  * store(request, response) {

  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }
}

module.exports = UserController
