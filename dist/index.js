"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _http = require("http");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _socket = _interopRequireDefault(require("./core/socket"));

var _UserController = _interopRequireDefault(require("./controller/UserController"));

var _DialogController = _interopRequireDefault(require("./controller/DialogController"));

var _MessageController = _interopRequireDefault(require("./controller/MessageController"));

var _checkToken = _interopRequireDefault(require("./middlewares/checkToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = new _UserController["default"]();

_dotenv["default"].config();

var app = (0, _express["default"])();
var http = (0, _http.createServer)(app);
var io = (0, _socket["default"])(http);
var Dialog = new _DialogController["default"](io);
var Message = new _MessageController["default"](io);
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(_checkToken["default"]);

_mongoose["default"].connect("mongodb://localhost/chat", {
  useUnifiedTopology: true
});

app.get("/user", User.index);
app.post("/user/signup", User.create);
app.post("/user/signin", User.login);
app.get('/dialogs', Dialog.index);
app.post('/dialog/create', Dialog.create);
app.get('/message/:id', Message.index);
app.post('/message/create', Message.create);
http.listen(process.env.PORT, function () {
  console.log("server it`s work!");
});