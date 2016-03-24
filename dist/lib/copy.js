'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (src, dest) {
    return new Promise(function (resolve, reject) {
        (0, _fsExtra.copy)(src, dest, {
            clobber: false,
            filter: function filter(path) {
                return !/\/[.]git(\/.*)?$/.test(path);
            }
        }, function (err) {
            return err ? reject(err) : resolve();
        });
    });
};

var _fsExtra = require('fs-extra');