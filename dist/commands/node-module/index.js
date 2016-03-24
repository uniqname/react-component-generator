'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ncp = require('ncp');

var _ncp2 = _interopRequireDefault(_ncp);

var _log = require('../../lib/log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var copy = function copy(src, dest) {
    return new Promise(function (resolve, reject) {
        (0, _ncp2.default)(src, dest, { clobber: false, stopOnErr: true }, function (err) {
            return err ? reject(err) : resolve();
        });
    });
};

exports.default = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
        var _ref$name = _ref.name;
        var name = _ref$name === undefined ? 'my-module' : _ref$name;
        var src, dest;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        src = _path2.default.resolve(__dirname + '/./lds-module-template');
                        dest = process.cwd() + '/' + name;
                        _context.prev = 2;

                        (0, _log.info)('copying: ' + src + ' -> ' + dest);
                        _context.next = 6;
                        return copy(src, dest);

                    case 6:
                        (0, _log.success)('done');
                        _context.next = 13;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](2);

                        (0, _log.error)(_context.t0);
                        process.exit(1);

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[2, 9]]);
    }));

    return function (_x) {
        return ref.apply(this, arguments);
    };
}();