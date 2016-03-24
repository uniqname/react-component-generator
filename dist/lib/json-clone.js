"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};