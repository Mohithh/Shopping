"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;

var _page = _interopRequireDefault(require("@/middleware/mongoose/page"));

var _page2 = _interopRequireDefault(require("@/models/Order/page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// app/api/hello/route.js
var POST = (0, _page["default"])(function _callee(req) {
  var body, id, getProduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(req.json());

        case 3:
          body = _context.sent;
          id = body.id;
          _context.next = 7;
          return regeneratorRuntime.awrap(_page2["default"].findById(id));

        case 7:
          getProduct = _context.sent;
          return _context.abrupt("return", new Response(JSON.stringify({
            success: getProduct
          }), {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Error in POST handler:", _context.t0);
          return _context.abrupt("return", new Response(JSON.stringify({
            error: "Server error"
          }), {
            status: 500,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // export const POST =async(req,res)=>{
//     return new Response(JSON.stringify([272207,56455,555554]),
//     {status:200, headers:{"content-type":"application/json"}}
//   )
//   }

exports.POST = POST;