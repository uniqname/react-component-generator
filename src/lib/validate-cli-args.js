import minimist from 'minimist';
import usage from './usage';
import { info } from './log';
import { resolve, isAbsolute } from 'path';
import {list as getReleases, latest as latestRelease, validate as validateRelease} from './releases.js';

function normalizeBaseDir(p) {
    return isAbsolute(p) ? p : resolve(process.cwd() + `/${p}`);
}

function die(msg) {
    info(msg);
    process.exit(1); // eslint-disable-line no-process-exit
}

function end(msg) {
    info(msg);
    process.exit(0); // eslint-disable-line no-process-exit
}


async function normalizeArgs() {
    const { _, d, description, o, outdir, list, release } = minimist(process.argv.slice(2)),
        [ name ] = _,
        baseDir = normalizeBaseDir(outdir || o || process.cwd()),
        actualRelease = release || await latestRelease();

    return {
        name,
        baseDir,
        dest: `${baseDir}/${name}`,
        list,
        release: actualRelease,
        description: description || d
    };
}

export default async function() {
    let {name, baseDir, dest, list, release, description} = await normalizeArgs();

    if (list) {
        const releases = await getReleases();
        return end(releases.map((item, i) => i === 0 ? `* ${item}` : `  ${item}`).join('\n'));
    }

    if (!name) {
        return die(await usage());
    }

    if (!await validateRelease(release)) {
        return die(`Invalid release: '${release}'`);
    }

    return { name, description, baseDir, dest, release };
}
