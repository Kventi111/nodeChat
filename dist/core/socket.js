"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(http) {
  var io = (0, _socket["default"])(http);
  io.on("connection", function (socket) {
    socket.on("DIALOGS:JOIN", function (dialogId) {
      socket.dialogId = dialogId;
      socket.join(dialogId);
      console.log("JOINED", dialogId);
      socket.emit("DIALOGS:SUCCESS", "you joined to dialog with id ".concat(dialogId));
    });
    socket.on("MESSAGE", function (text) {
      if (text === 'Уебан') {
        socket.emit("DIALOGS:SUCCESS", "\u0441\u0430\u043C \u0442\u044B ".concat(text));
      } else {
        socket.emit("DIALOGS:SUCCESS", "\u043E\u0439 \u0432\u0441\u0435");
      }
    }); // socket.on("DIALOGS:TYPING", (obj) => {
    //   console.log(obj);
    //   socket.emit("DIALOGS:TYPING", obj);
    // });
  });
  return io;
};

exports["default"] = _default;