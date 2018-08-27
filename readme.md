# @wyze/rio

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![Codecov.io][codecov-image]][codecov-url]

> A utility to compile Node modules.

## Installation

### Yarn

```
$ yarn add --dev @wyze/rio
```

### npm

```
$ npm install --save-dev @wyze/rio
```

## Usage

```
$ rio --help

  Usage
    $ rio <input>

  Options
    --format, -f   Output file format (esm, umd, etc.)
    --output, -o   Output file

  Examples
    $ rio -o out.js in.ts
    $ rio -o out.js -f esm in.ts
```

## Change Log

> [Full Change Log](changelog.md)

### [v1.0.0](https://github.com/wyze/rio/releases/tag/v1.0.0) (2018-08-27)

* [[`5a1804a8cd`](https://github.com/wyze/rio/commit/5a1804a8cd)] - Initial commit (Neil Kistner)

## License

MIT © [Neil Kistner](//neilkistner.com)

[travis-image]: https://img.shields.io/travis/wyze/rio.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/rio

[npm-image]: https://img.shields.io/npm/v/@wyze/rio.svg?style=flat-square
[npm-url]: https://npmjs.com/package/@wyze/rio

[codecov-image]: https://img.shields.io/codecov/c/github/wyze/rio.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wyze/rio
