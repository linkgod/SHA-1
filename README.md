# SHA-1

[![npm](https://flat.badgen.net/npm/dw/sha-1)](https://npmcharts.com/compare/sha-1?minimal=true) [![npm](https://flat.badgen.net/npm/v/sha-1)](https://www.npmjs.com/package/sha-1) [![NPM](https://flat.badgen.net/github/license/linkgod/SHA-1)](https://www.npmjs.com/package/sha-1)

This is a SHA-1 hash generator by JavaScript.

## Live Demo

For a live demo, visit: [https://linkgod.github.io/SHA-1/](https://linkgod.github.io/SHA-1/)

## Get started

You can use the package in Node

```
$ npm install sha-1
```

```js
var sha1 = require('sha-1');
sha1('hello') // aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d
```

You can also use [bower](http://bower.io/) to install the component:

```
$ bower install SHA-1
```

```js
sha1('hello') // aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d
```
If you use RequireJS

```js
require(['./sha1'], function(sha1){
    sha1('hello'); // aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d
});
```

## License

Licensed under [MIT](./LICENSE)
