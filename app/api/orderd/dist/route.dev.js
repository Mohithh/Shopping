"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;

var _page = _interopRequireDefault(require("@/models/Order/page"));

var _page2 = _interopRequireDefault(require("@/middleware/mongoose/page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var POST = (0, _page2["default"])(function _callee(req) {
  var body, newOrder;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(req.json());

        case 3:
          body = _context.sent;
          // Parse JSON from the request body
          newOrder = new _page["default"](body);
          _context.next = 7;
          return regeneratorRuntime.awrap(newOrder.save());

        case 7:
          return _context.abrupt("return", new Response(JSON.stringify({
            success: true,
            data: newOrder
          }), {
            status: 201,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", new Response(JSON.stringify({
            success: false,
            error: _context.t0.message
          }), {
            status: 400,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
exports.POST = POST;