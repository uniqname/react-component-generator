import pkg from '../../package.json';
import request from 'request';
import fs from 'fs';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const tag = argv.t || argv.tag || `v${pkg.version}`;

const download = (repo) => (t) => (outPath) =>
  request(`${repo}/archive/${t}.zip`)
  .pipe(fs.createWriteStream(outPath))
  .on('close', function () {
    console.log(`react-component-template ${t} has been downloaded`);
  });

download(`https://github.com/uniqname/react-component-template`)(tag)(`releases/${tag}.zip`);
