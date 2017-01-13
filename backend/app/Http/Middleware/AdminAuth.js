'use strict'

class AdminAuth {

  * handle (request, response, next) {
    const user = yield request.auth.getUser()
    if (!user.is_admin) {
      response.unauthorized({message: "You are not authorized to use this route"})
      return
    }
    yield next
  }

}

module.exports = AdminAuth
