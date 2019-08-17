"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _UserController = require("./controller/UserController");

var _UserController2 = _interopRequireDefault(_UserController);

var _DialogController = require("./controller/DialogController");

var _DialogController2 = _interopRequireDefault(_DialogController);

var _MessageController = require("./controller/MessageController");

var _MessageController2 = _interopRequireDefault(_MessageController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = new _UserController2.default();

var Dialog = new _DialogController2.default();

var Message = new _MessageController2.default();

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

_mongoose2.default.connect("mongodb://localhost/chat");

app.get("/user/:id", User.index);
app.post("/user/create", User.create);

app.get('/dialog/:id', Dialog.index);
app.post('/dialog/create', Dialog.create);

app.get('/message/:id', Message.index);
app.post('/message/create', Message.create);

app.listen(3333, function () {
  console.log("server it`s work!");
});