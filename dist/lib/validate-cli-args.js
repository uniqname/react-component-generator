'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var normalizeArgs = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _minimist, _, d, description, o, outdir, list, release, _ref, name, baseDir, actualRelease;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _minimist = (0, _minimist3.default)(process.argv.slice(2));
                        _ = _minimist._;
                        d = _minimist.d;
                        description = _minimist.description;
                        o = _minimist.o;
                        outdir = _minimist.outdir;
                        list = _minimist.list;
                        release = _minimist.release;
                        _ref = _slicedToArray(_, 1);
                        name = _ref[0];
                        baseDir = normalizeBaseDir(outdir || o || process.cwd());
                        _context.t0 = release;

                        if (_context.t0) {
                            _context.next = 16;
                            break;
                        }

                        _context.next = 15;
                        return (0, _releases.latest)();

                    case 15:
                        _context.t0 = _context.sent;

                    case 16:
                        actualRelease = _context.t0;
                        return _context.abrupt('return', {
                            name: name,
                            baseDir: baseDir,
                            dest: baseDir + '/' + name,
                            list: list,
                            release: actualRelease,
                            description: description || d
                        });

                    case 18:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function normalizeArgs() {
        return ref.apply(this, arguments);
    };
}();

var _minimist2 = require('minimist');

var _minimist3 = _interopRequireDefault(_minimist2);

var _usage = require('./usage');

var _usage2 = _interopRequireDefault(_usage);

var _log = require('./log');

var _path = require('path');

var _releases = require('./releases.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function normalizeBaseDir(p) {
    return (0, _path.isAbsolute)(p) ? p : (0, _path.resolve)(process.cwd() + ('/' + p));
}

function die(msg) {
    (0, _log.info)(msg);
    process.exit(1);
}

function end(msg) {
    (0, _log.info)(msg);
    process.exit(0);
}

exports.default = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var _ref2, name, baseDir, dest, list, release, description, releases;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return normalizeArgs();

                case 2:
                    _ref2 = _context2.sent;
                    name = _ref2.name;
                    baseDir = _ref2.baseDir;
                    dest = _ref2.dest;
                    list = _ref2.list;
                    release = _ref2.release;
                    description = _ref2.description;

                    if (!list) {
                        _context2.next = 14;
                        break;
                    }

                    _context2.next = 12;
                    return (0, _releases.list)();

                case 12:
                    releases = _context2.sent;
                    return _context2.abrupt('return', end(releases.map(function (item, i) {
                        return i === 0 ? '* ' + item : '  ' + item;
                    }).join('\n')));

                case 14:
                    if (name) {
                        _context2.next = 19;
                        break;
                    }

                    _context2.next = 17;
                    return (0, _usage2.default)();

                case 17:
                    _context2.t0 = _context2.sent;
                    return _context2.abrupt('return', die(_context2.t0));

                case 19:
                    _context2.next = 21;
                    return (0, _releases.validate)(release);

                case 21:
                    if (_context2.sent) {
                        _context2.next = 23;
                        break;
                    }

                    return _context2.abrupt('return', die('Invalid release: \'' + release + '\''));

                case 23:
                    return _context2.abrupt('return', { name: name, description: description, baseDir: baseDir, dest: dest, release: release });

                case 24:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));