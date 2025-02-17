"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;

var _page = _interopRequireDefault(require("@/middleware/mongoose/page"));

var _page2 = _interopRequireDefault(require("@/models/Users/page"));

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jwt = require('jsonwebtoken');

var POST = function POST(req, res) {
  var body, user, bytes, userpasswordd, token;
  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          body = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(_page2["default"].findOne({
            "email": body.email
          }));

        case 5:
          user = _context.sent;

          if (!user) {
            _context.next = 15;
            break;
          }

          bytes = _cryptoJs["default"].AES.decrypt(user.password, 'mohit');
          userpasswordd = bytes.toString(_cryptoJs["default"].enc.Utf8);

          if (!(user.email == body.email && body.password == userpasswordd)) {
            _context.next = 14;
            break;
          }

          token = jwt.sign({
            success: true,
            email: body.email,
            name: user.name
          }, 'jwttokenn', {
            expiresIn: '1d'
          });
          return _context.abrupt("return", new Response(JSON.stringify({
            success: true,
            token: token
          })));

        case 14:
          return _context.abrupt("return", new Response(JSON.stringify({
            success: false,
            error: "invalid information"
          }), {
            status: 400,
            headers: {
              "context-type": "application/json"
            }
          }));

        case 15:
          return _context.abrupt("return", new Response(JSON.stringify({
            success: false,
            error: "invalid info"
          }), {
            status: 400,
            headers: {
              "context-type": "application/json"
            }
          }));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.POST = POST;