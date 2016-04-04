#!/usr/bin/env node
import 'babel-polyfill';
import path from 'path';

import validateCLI from './lib/validate-cli-args';
import ensureDir from './lib/ensure-dir.js';
import unzip from './lib/unzip.js';
import repackage from './lib/re-package.js';
import {success, error as logError} from './lib/log';

(async () => {

    try {
        const { name, description, dest, baseDir, release } = await validateCLI(),
            zipfile = path.resolve(`${__dirname}/../releases/${release}.zip`);

        await ensureDir(baseDir);
        await unzip(zipfile, dest);
        await repackage({name, description, file: `${dest}/package.json`});
        success(`created '${name}' in '${dest}'`);

    } catch (error) {
        logError(error);
        throw Error(1);
    }


})();
