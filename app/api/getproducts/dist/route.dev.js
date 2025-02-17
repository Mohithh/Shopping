"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;

var _page = _interopRequireDefault(require("@/models/Products/page"));

var _page2 = _interopRequireDefault(require("@/middleware/mongoose/page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET = (0, _page2["default"])(function _callee(req, res) {
  var getproduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_page["default"].find());

        case 2:
          getproduct = _context.sent;
          return _context.abrupt("return", new Response(JSON.stringify({
            "success": getproduct
          }), {
            status: 200,
            headers: {
              "content": "application/json"
            }
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.GET = GET;