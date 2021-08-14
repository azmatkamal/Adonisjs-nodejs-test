"use strict";
const User = use("App/Models/User");
const _ = require("lodash");

class UserController {
  async getUser({ request, auth, params }) {
    const { id } = params;

    if (!params) {
      return {
        code: "fail",
        msg: "Invalid user id",
      };
    }

    let user = await User.query()
      .where("id", id)
      .select("id", "name", "email", "username", "created_at", "updated_at")
      .first();

    if (user) {
      return {
        code: "success",
        data: user,
        msg: "Record found",
      };
    }

    return {
      code: "fail",
      data: null,
      msg: "Record not found",
    };
  }
}

module.exports = UserController;
