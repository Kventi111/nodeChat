"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageSchema = new _mongoose.Schema({
  text: {
    type: String,
    require: true
  },
  undear: {
    type: Boolean,
    defaul: false
  },
  user: {
    type: String,
    require: true
  },
  dialog: {
    type: _mongoose.Schema.Types.ObjectId, ref: "Dialog", require: true
  }
}, {
  timestamp: true
});

var MessageModel = _mongoose2.default.model("Message", MessageSchema);

exports.default = MessageModel;