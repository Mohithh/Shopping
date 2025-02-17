"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;

var _page = _interopRequireDefault(require("@/models/Products/page"));

var _page2 = _interopRequireDefault(require("@/middleware/mongoose/page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the Product model
// Import MongoDB connection middleware
var POST = (0, _page2["default"])(function _callee(req, res) {
  var body, addproduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(req.json());

        case 3:
          body = _context.sent;
          addproduct = new _page["default"]({
            title: body.title,
            slug: body.slug,
            description: body.description,
            image: body.image,
            category: body.category,
            size: body.size,
            color: body.color,
            price: body.price,
            availableQty: body.availableQty
          });
          _context.next = 7;
          return regeneratorRuntime.awrap(addproduct.save());

        case 7:
          return _context.abrupt("return", new Response(JSON.stringify({
            "success": "your product has been added"
          }), {
            status: 200,
            headers: {
              "content-type": "application/json"
            }
          }));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", new Response(JSON.stringify({
            "error": _context.t0.message
          }), {
            status: 400,
            headers: {
              "content-type": "application/json"
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