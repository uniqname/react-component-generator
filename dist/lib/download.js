'use strict';

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

var _admZip = require('adm-zip');

var _admZip2 = _interopRequireDefault(_admZip);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = (0, _minimist2.default)(process.argv.slice(2));
var tag = argv.t || argv.tag || 'master';

var unwrapDir = function unwrapDir(dir) {
  return function (f) {
    f.entryName = f.entryName.replace(dir, '');
    return f;
  };
};
var addFile = function addFile(zipper, file) {
  zipper.addFile(file.entryName, file.getCompressedData());
  return zipper;
};

var download = function download(repo) {
  return function (t) {
    return function (outPath) {
      return (0, _request2.default)(repo + '/archive/' + t + '.zip').pipe(_fs2.default.createWriteStream(outPath)).on('error', function (e) {
        return console.log('Failed to download ' + repo + '/archive/' + t, e);
      }).on('close', function () {
        var gitHubZip = new _admZip2.default(outPath);
        var zip = new _admZip2.default();

        var entries = gitHubZip.getEntries();
        var head = entries.slice(0, 1)[0];
        var tail = entries.slice(1);

        tail.map(unwrapDir(head.entryName)).reduce(addFile, zip);
        zip.writeZip('' + outPath);

        console.log('react-component-template ' + t + ' has been downloaded to ' + outPath);
      });
    };
  };
};

download('https://github.com/uniqname/react-component-template')(tag)('releases/' + tag + '.zip');