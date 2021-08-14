"use strict";
const User = use("App/Models/User");

class AuthController {
  async login({ request, auth }) {
    const email = request.input("email");
    const password = request.input("password");

    const token = await auth.attempt(email, password, {
      expiresIn: "10 days",
    });

    let user = null;
    if (token) {
      user = await User.query().where("email", email).first();
    }

    return {
      code: "success",
      user_id: user.id,
      msg: "Logged in successfully",
      access_token: token,
    };
  }

  async register({ request, auth }) {
    const username = request.input("username");
    const email = request.input("email");
    const password = request.input("password");
    const name = request.input("name");
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.name = name;
    await newUser.save();
    return {
      code: "success",
      msg: "Registered successfully",
    };
  }
}

module.exports = AuthController;
