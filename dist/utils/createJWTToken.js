'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (user) {
  var token = _jsonwebtoken2.default.sign({
    data: (0, _lodash.reduce)(user, function (result, value, key) {
      if (key !== 'password') {
        result[key] = value;
      }
      return result;
    }, {})
  }, process.env.JWT_SECRET || '', {
    expiresIn: process.env.JWT_MAX_AGE,
    algorithm: 'HS256'
  });

  return token;
};