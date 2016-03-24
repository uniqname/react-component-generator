'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (zipfile, dir) {
    return new Promise(function (resolve, reject) {
        (0, _extractZip2.default)(zipfile, { dir: dir }, function (err) {
            return err ? reject(err) : resolve(dir);
        });
    });
};

var _extractZip = require('extract-zip');

var _extractZip2 = _interopRequireDefault(_extractZip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }