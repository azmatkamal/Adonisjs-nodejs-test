"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");
const app = require("../package.json");

Route.get("/", () => {
  return { name: app.name, version: app.version };
});

Route.post("api/v1/login", "AuthController.login");
Route.post("api/v1/register", "AuthController.register");
Route.get("api/v1/user/:id", "UserController.getUser").middleware("auth");
