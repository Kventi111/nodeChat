"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialog = _interopRequireDefault(require("../models/dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserController =
/*#__PURE__*/
function () {
  function UserController(io) {
    var _this = this;

    _classCallCheck(this, UserController);

    _defineProperty(this, "create", function (req, res) {
      var authorId = req.user._id;
      var postData = {
        author: authorId,
        partner: req.body.partnerId,
        lastMessage: req.body.lastMessage
      };
      var dialog = new _dialog["default"](postData);
      dialog.save().then(function (dialogObj) {
        // TODO - сделать персонализированную отправку
        _this.io.emit("SERVER:NEW_MESSAGE", dialogObj._id);

        return res.status(200).json(dialogObj);
      })["catch"](function (err) {
        return res.status(400).json(err);
      });
    });

    this.io = io;
  }

  _createClass(UserController, [{
    key: "index",
    value: function index(req, res) {
      var authorId = req.user._id;

      _dialog["default"].find().or([{
        author: authorId
      }, {
        partner: authorId
      }]).populate(['author', 'partner']).populate({
        path: "lastMessage",
        populate: {
          path: "user"
        }
      }).exec(function (err, dialog) {
        if (err) return res.status(404).send('dialog not found');
        return res.json(dialog);
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;