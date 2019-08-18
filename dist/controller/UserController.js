"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

var _createJWTToken = require("../utils/createJWTToken");

var _createJWTToken2 = _interopRequireDefault(_createJWTToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "index",
    value: function index(req, res) {
      var id = req.params.id;

      _user2.default.findById(id, function (err, user) {
        if (err) res.status(404).send("notFound");

        res.json(user);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var data = req.body;
      var user = new _user2.default(data);

      user.save().then(function (user) {
        return console.log("user " + user.fullname + " created");
      }).catch(function (err) {
        return res.status(400).json(err);
      });

      return res.send("Запись добавленна");
    }
  }, {
    key: "login",
    value: function login(req, res) {
      var postData = {
        email: req.body.email,
        password: req.body.password
      };

      _user2.default.findOne({ email: postData.email }, function (err, user) {
        if (err || !user) {
          return res.status(404).json({
            message: "User not found"
          });
        }

        if (postData.password === user.password) {
          var token = (0, _createJWTToken2.default)(user);
          res.json({
            status: "success",
            token: token
          });
        } else {
          res.status(403).json({
            status: "error",
            message: "Incorrect password or email"
          });
        }
      });
    }
  }]);

  return UserController;
}();

exports.default = UserController;