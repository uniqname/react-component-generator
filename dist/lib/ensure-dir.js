'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (dir) {
    return new Promise(function (resolve, reject) {
        (0, _fsExtra.ensureDir)(dir, function (err) {
            return err ? reject(err) : resolve();
        });
    });
};

var _fsExtra = require('fs-extra');