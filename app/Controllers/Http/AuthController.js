'use strict'

const User = use('App/Models/User');
class AuthController {
  async login ({request, response, auth}) {
    const { user } = request.all();
    const logged = await auth.attempt(user.email, user.password, true);
    return response.jason(logged);
  }

  async register({request, response, auth}) {
    const userInstance = new User();
    const { user } = request.all();

    userInstance.username = user.email;
    userInstance.email = user.email;
    userInstance.password = user.password;

    await userInstance.save();

    return response.jason(userInstance);
  }
}

module.exports = AuthController
