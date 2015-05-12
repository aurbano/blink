/**
 * Module dependencies.
 */
var EventEmitter = require('events').EventEmitter;
var mixin = require('merge-descriptors');

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;

/**
 * Create a blink application.
 *
 * @return {Function}
 * @api public
 */

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);

  app.request = { __proto__: req, app: app };
  app.response = { __proto__: res, app: app };
  
  app.init();
  return app;
}
