'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schemas = require('../schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: 'index',
    value: function index(_, res) {
      // console.log({res})
      // UserModel.findById(id,function(err,user) {
      //   if (err) return res.status(404).json({ message : 'userNotFound' }) 

      //   res.json(user)
      // })
      // console.log(222)
      console.log(req);
      res.json("2");
    }
    // create(reg,res) {

    // }
    // update(reg,res) {

    // }
    // delete(reg,res) {

    // }

  }]);

  return UserController;
}();

exports.default = UserController;