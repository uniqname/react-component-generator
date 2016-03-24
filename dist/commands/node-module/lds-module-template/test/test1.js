'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _index = require('../src/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('Your module', function (t) {
    t.plan(1);
    var truthBomb = (0, _index2.default)();
    t.equal(true, truthBomb, 'works as expected...');
});