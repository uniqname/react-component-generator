'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (args.subcommands.includes('dbg')) {
        (0, _log.json)(args);
    } else {
        (0, _log.info)('commands: ' + Object.keys(_index2.default).join(', '));
    }
};

var _log = require('../../lib/log');

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }