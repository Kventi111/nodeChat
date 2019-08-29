"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  dialog: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Dialog",
    require: true
  }
}, {
  timestamp: true
});

var MessageModel = _mongoose["default"].model("Message", MessageSchema);

var _default = MessageModel;
exports["default"] = _default;