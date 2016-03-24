# react-component-boilerplate

Want to create a react component module? This CLI utility creates scaffolding needed to do so.

```
react-component your-component-name

// or

react-component -d "The best component ever" -o ./path/to/components your-component-name
```



## Usage

```
react-component [options] component-name

options:
-o              where to create the component
--outdir        eg: react-component -o ./path/to/modules/ my-component

-d              description of the component
--description   eg: react-component -d "the best component evah" my-component

--list          show all available releases

--release       create a component from a specific template release version
                defaults to latest (${l})
```



## Module Template

The project template this CLI uses can be found at .


## Contributing

Please see [contributing doc](./docs/contributing.md).
