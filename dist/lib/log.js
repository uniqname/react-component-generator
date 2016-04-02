'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.styleWarn = styleWarn;
exports.warn = warn;
exports.styleError = styleError;
exports.error = error;
exports.styleInfo = styleInfo;
exports.info = info;
exports.json = json;
exports.styleSuccess = styleSuccess;
exports.success = success;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function log(msg) {
    console.log(msg);
} /* eslint-disable no-console */


function styleWarn(msg) {
    return _chalk2.default.yellow(msg);
}

function warn(msg) {
    console.error(styleError(msg));
}

function styleError(msg) {
    return _chalk2.default.red(msg);
}

function error(msg) {
    console.error(styleError(msg));
}

function styleInfo(msg) {
    return _chalk2.default.white(msg);
}

function info(msg) {
    console.log(styleInfo(msg));
}

function json(obj) {
    info(JSON.stringify(obj, null, 4));
}

function styleSuccess(msg) {
    return _chalk2.default.green(msg);
}

function success(msg) {
    console.log(styleSuccess(msg));
}

/* eslint-disable no-console */