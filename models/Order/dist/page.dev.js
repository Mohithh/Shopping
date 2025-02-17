"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var orderSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  transactionid: {
    type: String,
    unique: true,
    required: true
  },
  product: {
    type: Object,
    // Accepts a nested object with custom keys
    required: true
  },
  address: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    "default": "verification pending  "
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].models.Order || _mongoose["default"].model("Order", orderSchema);

exports["default"] = _default;