"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _page = _interopRequireDefault(require("@/models/Products/page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// databasee/page.js 
// pages/api/products.js
var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!_mongoose["default"].connections[0].readyState) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGO_URL));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

function handler(req, res) {
  var products;
  return regeneratorRuntime.async(function handler$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(connectDB());

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(_page["default"].find({
            category: "tshirt"
          }));

        case 5:
          products = _context2.sent;
          res.status(200).json(products); // Send products as response

          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching products:", _context2.t0);
          res.status(500).json({
            message: "Error fetching products",
            error: _context2.t0
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}