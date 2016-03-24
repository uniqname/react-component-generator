import { ensureDir } from 'fs-extra';

export default function( dir ) {
    return new Promise((resolve, reject) => {
        ensureDir(dir, err => err ? reject(err) : resolve() )
    });
}
