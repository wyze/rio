# @wyze/rio &middot; [![Build Status][actions-image]][actions-url] [![npm][npm-image]][npm-url] [![Codecov.io][codecov-image]][codecov-url]

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
    --banner,    -b   Add banner to top of output file
    --externals, -e   Add external files that shouldn't be bundled
    --format,    -f   Output file format (esm, umd, etc.)
    --output,    -o   Output file

  Examples
    $ rio -o out.js in.ts
    $ rio -o out.js -f esm in.ts
    $ rio -o out.js -e chalk,debug in.ts
    $ rio -o out.js -b '#!/usr/bin/env node' in.ts
```

## Change Log

> [Full Change Log](changelog.md)

### [v1.3.0](https://github.com/wyze/rio/releases/tag/v1.3.0) (2020-03-29)

* Fix CI ([@wyze](https://github.com/wyze) in [30b5c79](https://github.com/wyze/rio/commit/30b5c79))
* Upgrade dependencies ([@wyze](https://github.com/wyze) in [4fc468f](https://github.com/wyze/rio/commit/4fc468f))
* Add lint and type-check commands ([@wyze](https://github.com/wyze) in [#8](https://github.com/wyze/rio/pull/8))
* Switch to GitHub actions ([@wyze](https://github.com/wyze) in [#1](https://github.com/wyze/rio/pull/1))
* 1.2.0 ([@wyze](https://github.com/wyze) in [38dbc5f](https://github.com/wyze/rio/commit/38dbc5f))

## License

MIT © [Neil Kistner](//neilkistner.com)

[actions-image]: https://img.shields.io/github/workflow/status/wyze/rio/CI.svg?style=flat-square
[actions-url]: https://github.com/wyze/rio/actions

[npm-image]: https://img.shields.io/npm/v/@wyze/rio.svg?style=flat-square
[npm-url]: https://npmjs.com/package/@wyze/rio

[codecov-image]: https://img.shields.io/codecov/c/github/wyze/rio.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wyze/rio
