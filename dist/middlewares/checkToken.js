"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _verifyJWTToken = _interopRequireDefault(require("../utils/verifyJWTToken"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(req, res, next) {
  if (req.path === "/user/signin" || req.path === "/user/signup" || req.path === "/user/verify") {
    return next();
  }

  var token = req.headers.token;
  (0, _verifyJWTToken["default"])(token).then(function (user) {
    req.user = user.data._doc;
    next();
  })["catch"](function (err) {
    res.status(403).json({
      message: "Invalid auth token provided."
    });
  });
};

exports["default"] = _default;