#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _validateCliArgs = require('./lib/validate-cli-args');

var _validateCliArgs2 = _interopRequireDefault(_validateCliArgs);

var _ensureDir = require('./lib/ensure-dir.js');

var _ensureDir2 = _interopRequireDefault(_ensureDir);

var _unzip = require('./lib/unzip.js');

var _unzip2 = _interopRequireDefault(_unzip);

var _rePackage = require('./lib/re-package.js');

var _rePackage2 = _interopRequireDefault(_rePackage);

var _log = require('./lib/log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var _ref, name, description, dest, baseDir, release, zipfile;

    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return (0, _validateCliArgs2.default)();

                case 3:
                    _ref = _context.sent;
                    name = _ref.name;
                    description = _ref.description;
                    dest = _ref.dest;
                    baseDir = _ref.baseDir;
                    release = _ref.release;
                    zipfile = _path2.default.resolve(__dirname + '/../releases/' + release + '.zip');
                    _context.next = 12;
                    return (0, _ensureDir2.default)(baseDir);

                case 12:
                    _context.next = 14;
                    return (0, _unzip2.default)(zipfile, dest);

                case 14:
                    _context.next = 16;
                    return (0, _rePackage2.default)({ name: name, description: description, file: dest + '/package.json' });

                case 16:
                    (0, _log.success)('created \'' + name + '\' in \'' + dest + '\'');

                    _context.next = 23;
                    break;

                case 19:
                    _context.prev = 19;
                    _context.t0 = _context['catch'](0);

                    (0, _log.error)(_context.t0);
                    process.exit(1);

                case 23:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[0, 19]]);
}))();