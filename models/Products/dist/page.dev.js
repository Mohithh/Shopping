"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  size: {
    type: String
  },
  color: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  availableQty: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); // Avoid overwriting the model if it already exists

_mongoose["default"].models = {};

var _default = _mongoose["default"].model("Products", productSchema);

exports["default"] = _default;