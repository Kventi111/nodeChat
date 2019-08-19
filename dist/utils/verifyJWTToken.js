"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(token) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, function (err, decodeToken) {
      if (err || !decodeToken) {
        return reject(err);
      }

      resolve(decodeToken);
    });
  });
};

exports["default"] = _default;