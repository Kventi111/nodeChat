"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _createJWTToken = _interopRequireDefault(require("../utils/createJWTToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "index",
    value: function index(req, res) {
      var userId = req.user._id;

      _user["default"].findById(userId, {
        password: 0
      }, function (err, user) {
        // console.log(err)
        // if (!err) res.status(404).send("notFound")
        res.status(200).json(user);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var data = req.body;
      var user = new _user["default"](data);
      user.save().then(function (user) {
        return res.json({
          status: "success",
          token: (0, _createJWTToken["default"])(user)
        });
      })["catch"](function (err) {
        return res.status(400).json(err);
      });
    }
  }, {
    key: "login",
    value: function login(req, res) {
      var postData = {
        email: req.body.email,
        password: req.body.password
      };

      _user["default"].findOne({
        email: postData.email
      }, function (err, user) {
        if (err || !user) {
          return res.json({
            message: "Incorrect password or email"
          });
        }

        if (postData.password === user.password) {
          var token = (0, _createJWTToken["default"])(user);
          res.json({
            status: "success",
            token: token
          });
        } else {
          res.json({
            status: "error",
            message: "Incorrect password or email"
          });
        }
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;