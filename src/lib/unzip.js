import extract from 'extract-zip';

export default function(zipfile, dir) {
    return new Promise((resolve, reject) => {
        extract(zipfile, { dir }, err => {
            return err ? reject(err) : resolve(dir);
        });
    });
}
