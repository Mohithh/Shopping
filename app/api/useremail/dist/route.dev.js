"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;

var _page = _interopRequireDefault(require("@/models/Order/page"));

var _page2 = _interopRequireDefault(require("@/middleware/mongoose/page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jwt = require('jsonwebtoken');

var POST = (0, _page2["default"])(function _callee(req, res) {
  var body, token, data, order;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          body = _context.sent;
          token = body.token;
          data = jwt.verify(token, "jwttokenn");
          _context.next = 7;
          return regeneratorRuntime.awrap(_page["default"].find({
            email: data.email
          }));

        case 7:
          order = _context.sent;
          return _context.abrupt("return", new Response(JSON.stringify({
            success: true,
            email: data.email,
            order: order
          }), {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.POST = POST;