"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
  lastMessage: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Message"
  }
}, {
  timestamp: true
});

var DialogModel = _mongoose["default"].model("Dialog", DialogSchema);

var _default = DialogModel;
exports["default"] = _default;