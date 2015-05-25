/**
 * Module dependencies.
 */
var express = require('express');

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication();

/**
 * Create a blink application.
 *
 * @return {Function}
 * @api public
 */

function createApplication() {
  return express;
}
