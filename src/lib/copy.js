import { copy } from 'fs-extra';

export default function (src, dest) {
    return new Promise((resolve, reject) => {
        copy(
            src,
            dest,
            {
                clobber: false,
                filter: path => {
                    return !(/\/[.]git(\/.*)?$/).test(path);
                }
            },
            err => err ? reject(err) : resolve()
        );
    });
}
