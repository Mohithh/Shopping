"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;

// app/api/hello/route.js
var GET = function GET(req, res) {
  var pincode;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pincode = {
            "272207": ["Uttar pradesh", "Siddharth Nagar"],
            "110003": ["Delhi", "delhi"],
            "721302": ["Kharagpur", "west bangal"]
          };
          return _context.abrupt("return", new Response(JSON.stringify(pincode), {
            status: 200,
            headers: {
              "content-type": "application/json"
            }
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.GET = GET;