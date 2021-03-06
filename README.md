# Vue Design Blocks

[![MIT](https://img.shields.io/npm/l/express.svg)](https://github.com/yaroschiffelers/vue-design-blocks/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> Froala Design Blocks as Vue Components

All of the magnificent Froala Design Blocks rebuild as ready-to-use Vue components. Easy and fast prototyping. 

### Prerequisites

You'll need Node and Yarn.

### Getting Up and Running

Clone this repo:

```
git clone https://github.com/yaroschiffelers/vue-design-blocks.git
```

Head over to your new directory:

```
cd vue-design-blocks
```

Install the project dependencies:

```
yarn install
```

Run the component builder:

```
yarn build-components
```

After the builder is done, you'll find a fully filled folder with every Froala Design Block as an individual .vue component. They can be located at ```src/components/designblocks```. Check em out! 

## Vue Build Setup 

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Register Components Globally (BETA)

For your convenience I added the ```globals.js``` file. This file will automatically import and register all design block components as global Vue components. This way you don't need to import every component by hand. Which makes it easy to get a prototype up and running in no time. 

### Warning 

This still throws errors because of wrong src paths in some components. You can fix this by hand, just change the paths to 'scr/assets/vendor/froala'. 

A fix for this bug is still a WIP. 

### Activating

If you want to make use of this functionality, go to ```main.js``` and uncomment the following line: 

```javascript
// import './globals' 
``` 

After uncommenting just start your application the way you normally would:

```bash
yarn dev
``` 

## Built With

* [Froala-design-blocks](https://www.froala.com/design-blocks) -  Awesome building blocks for beautiful websites
* [VueJs](https://vuejs.org/) - The javascript framework used for this project
* [Bootstrap](https://v4-alpha.getbootstrap.com/) - The most popular HTML and CSS framework on the web

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/yaroschiffelers/vue-design-blocks/tags). 

## Authors

* [**Yaro Schiffelers**](https://github.com/yaroschiffelers) - *Initial work* 

See also the list of [contributors](https://github.com/yaroschiffelers/vue-desing-blocks/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Cheerio](https://github.com/cheeriojs/cheerio) - For their amazing HTML parser. 
