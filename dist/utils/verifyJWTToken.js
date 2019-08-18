'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (token) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET, function (err, decodeToken) {
      if (err || !decodeToken) {
        return reject(err);
      }

      resolve(decodeToken);
    });
  });
};