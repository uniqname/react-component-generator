'use strict';

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = (0, _minimist2.default)(process.argv.slice(2));
var tag = argv.t || argv.tag || 'v' + _package2.default.version;

var download = function download(repo) {
  return function (t) {
    return function (outPath) {
      return (0, _request2.default)(repo + '/archive/' + t + '.zip').pipe(_fs2.default.createWriteStream(outPath)).on('close', function () {
        console.log('react-component-template ' + t + ' has been downloaded');
      });
    };
  };
};

download('https://github.com/uniqname/react-component-template')(tag)('releases/' + tag + '.zip');