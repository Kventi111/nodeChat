'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _message = require('../models/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageController = function () {
  function MessageController() {
    _classCallCheck(this, MessageController);
  }

  _createClass(MessageController, [{
    key: 'index',
    value: function index(req, res) {
      var dialogId = req.params.id;

      _message2.default.find({ dialog: dialogId }).populate('dialog').exec(function (err, message) {
        if (err) return res.status(404).send('messages not found');

        return res.status(200).json(message);
      });
    }
  }, {
    key: 'create',
    value: function create(req, res) {
      var userId = "5d5879384a754d8587fce05b";

      var postData = {
        user: userId,
        text: req.body.text,
        dialog: req.body.dialog
      };

      var message = new _message2.default(postData);

      message.save().then(function (message) {
        return console.log('message ' + message._id + ' created');
      }).catch(function (err) {
        return res.status(400).json(err);
      });

      return res.status(200).send("Запись добавленна");
    }
  }]);

  return MessageController;
}();

exports.default = MessageController;