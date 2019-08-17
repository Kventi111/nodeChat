"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogSchema = new _mongoose.Schema({
  author: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  partner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  lastMessage: String
  // lastMessage : {
  //   type : Schema.Types.ObjectId,
  //   ref  : "Message", 
  //   require : true
  // }
}, {
  timestamp: true
});

var DialogModel = _mongoose2.default.model("Dialog", DialogSchema);

exports.default = DialogModel;