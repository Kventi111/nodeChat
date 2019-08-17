'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dialog = require('../models/dialog');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: 'index',
    value: function index(req, res) {
      var authorId = req.params.id;

      _dialog2.default.find({ author: authorId }).populate(['author', 'partner']).exec(function (err, dialog) {
        if (err) return res.status(404).send('dialog not found');

        return res.json(dialog);
      });
    }
  }, {
    key: 'create',
    value: function create(req, res) {
      var authorId = "5d5879384a754d8587fce05b";

      var postData = {
        author: authorId,
        partner: req.body.partnerId,
        lastMessage: req.body.lastMessage
      };

      var dialog = new _dialog2.default(postData);

      dialog.save().then(function (dialog) {
        return console.log('dialog ' + dialog._id + ' created');
      }).catch(function (err) {
        return res.status(400).json(err);
      });

      return res.status(200).send('Диалог создан');
    }
  }]);

  return UserController;
}();

exports.default = UserController;