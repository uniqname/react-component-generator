import {readdir} from 'fs';
import path from 'path';
import {gt as isNewer} from 'semver';

export async function list() {
    const versions = await new Promise((resolve, reject) => {
        readdir(path.join(__dirname, '..', '..', 'releases'), (err, files) => {
            if (err) {
                return reject(err);
            }

            resolve(files.filter(f=>!f.match(/^\./)).map(f=>f.replace('.zip', '')));

            return undefined;
        });
    });

    return versions.sort((a, b) => isNewer(a, b) ? -1 : 1);

}


export async function latest() {
    const versions = await list();

    return versions[0];
}


export async function validate(version) {
    const versions = await list();

    return versions.indexOf(version) === -1 ? false : version;
}
