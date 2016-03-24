import {latest} from './releases.js';
import {version} from '../../package.json';


export default async function() {

    const l = await latest();


    return `create a react component
version ${version}

usage:
ldsjs-react-component [options] component-name

options:
-o              where to create the component
--outdir        eg: ldsjs-react-component -o ./path/to/modules/ my-component

-d              description of the component
--description   eg: ldsjs-react-component -d "the best component evah" my-component

--list          show all available releases

--release       create a component from a specific template release version
                defaults to latest (${l})
`;

}
