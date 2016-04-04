import pkg from '../../package.json';

import Zip from 'adm-zip';
import request from 'request';
import fs from 'fs';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const tag = argv.t || argv.tag || `v${pkg.version}`;

const unwrapDir = (dir) => (f) => {
  f.entryName = f.entryName.replace(dir, '');
  return f;
};
const addFile = (zipper, file) => {
  zipper.addFile(file.entryName, file.getCompressedData());
  return zipper;
};

const download = (repo) => (t) => (outPath) =>
  request(`${repo}/archive/${t}.zip`)
  .pipe(fs.createWriteStream(outPath))
  .on('close', function () {
    const gitHubZip = new Zip(outPath);
    const zip = new Zip();

    const entries = gitHubZip.getEntries();
    const head = entries.slice(0, 1)[0];
    const tail = entries.slice(1);

    tail.map(unwrapDir(head.entryName))
        .reduce(addFile, zip);
    zip.writeZip(`${outPath}.zip`);

    console.log(`react-component-template ${t} has been downloaded to ${outPath}`);

  });

download('https://github.com/uniqname/react-component-template')(tag)(`releases/${tag}.zip`);
