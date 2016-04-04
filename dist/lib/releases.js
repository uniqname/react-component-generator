'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate = exports.latest = exports.list = undefined;

var list = exports.list = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var versions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return new Promise(function (resolve, reject) {
                            (0, _fs.readdir)(_path2.default.join(__dirname, '..', '..', 'releases'), function (err, files) {
                                if (err) {
                                    return reject(err);
                                }

                                resolve(files.filter(function (f) {
                                    return !f.match(/^\./);
                                }).map(function (f) {
                                    return f.replace('.zip', '');
                                }));

                                return undefined;
                            });
                        });

                    case 2:
                        versions = _context.sent;
                        return _context.abrupt('return', versions.sort(function (a, b) {
                            return (0, _semver.gt)(a, b) ? -1 : 1;
                        }));

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function list() {
        return ref.apply(this, arguments);
    };
}();

var latest = exports.latest = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var versions;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return list();

                    case 2:
                        versions = _context2.sent;
                        return _context2.abrupt('return', versions[0]);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function latest() {
        return ref.apply(this, arguments);
    };
}();

var validate = exports.validate = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(version) {
        var versions;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return list();

                    case 2:
                        versions = _context3.sent;
                        return _context3.abrupt('return', versions.indexOf(version) === -1 ? false : version);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function validate(_x) {
        return ref.apply(this, arguments);
    };
}();

var _fs = require('fs');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _semver = require('semver');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }