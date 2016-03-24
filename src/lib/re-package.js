import {readFile, writeFile} from 'fs';

// take a package.json file
// modify it
// resave it
export default function({ file, name, description = "" }) {

    return new Promise((resolve, reject) => {

        readFile(file, (err, data) => {
            if(err) return reject(err);

            writeFile(
                file,
                JSON.stringify({
                    ...(JSON.parse(data)),
                    name,
                    description,
                    version: "1.0.0",
                    author: undefined,
                    repository: undefined
                }, null, 4),
                err => err ? reject(err) : resolve()
            );
        });
    })
}
