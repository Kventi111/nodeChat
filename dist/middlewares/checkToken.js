"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verifyJWTToken = require("../utils/verifyJWTToken");

var _verifyJWTToken2 = _interopRequireDefault(_verifyJWTToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  if (req.path === "/user/signin" || req.path === "/user/signup" || req.path === "/user/verify") {
    return next();
  }

  var token = req.headers.token;

  (0, _verifyJWTToken2.default)(token).then(function (user) {
    req.user = user.data._doc;
    next();
  }).catch(function (err) {
    res.status(403).json({ message: "Invalid auth token provided." });
  });
};