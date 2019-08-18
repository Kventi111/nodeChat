"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _http = require("http");

var _socket = require("socket.io");

var _socket2 = _interopRequireDefault(_socket);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _UserController = require("./controller/UserController");

var _UserController2 = _interopRequireDefault(_UserController);

var _DialogController = require("./controller/DialogController");

var _DialogController2 = _interopRequireDefault(_DialogController);

var _MessageController = require("./controller/MessageController");

var _MessageController2 = _interopRequireDefault(_MessageController);

var _checkToken = require("./middlewares/checkToken");

var _checkToken2 = _interopRequireDefault(_checkToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = new _UserController2.default();

var Dialog = new _DialogController2.default();

var Message = new _MessageController2.default();

_dotenv2.default.config();

var app = (0, _express2.default)();
var http = (0, _http.createServer)(app);
var io = (0, _socket2.default)(http);

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(_checkToken2.default);

_mongoose2.default.connect("mongodb://localhost/chat", { useNewUrlParser: true });

app.get("/user/:id", User.index);
app.post("/user/create", User.create);
app.post("/user/signin", User.login);

app.get('/dialog/:id', Dialog.index);
app.post('/dialog/create', Dialog.create);

app.get('/message/:id', Message.index);
app.post('/message/create', Message.create);

io.on('connection', function (socket) {
  console.log('CONNECTED');
  socket.emit('test command', '123ij123kjkl');
});

http.listen(process.env.PORT, function () {
  console.log("server it`s work!");
});