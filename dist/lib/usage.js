'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _releases = require('./releases.js');

var _package = require('../../package.json');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var l;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _releases.latest)();

                case 2:
                    l = _context.sent;
                    return _context.abrupt('return', 'create a react component\nversion ' + _package.version + '\n\nusage:\nreact-component [options] component-name\n\noptions:\n-o              where to create the component\n--outdir        eg: react-component -o ./path/to/modules/ my-component\n\n-d              description of the component\n--description   eg: react-component -d "the best component evah" my-component\n\n--list          show all available releases\n\n--release       create a component from a specific template release version\n                defaults to latest (' + l + ')\n');

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));