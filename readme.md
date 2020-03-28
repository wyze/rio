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

### [v1.2.0](https://github.com/wyze/rio/releases/tag/v1.2.0) (2018-10-20)

* [[`4732f4db13`](https://github.com/wyze/rio/commit/4732f4db13)] - Move rollup config to TypeScript file (Neil Kistner)
* [[`079cf8b852`](https://github.com/wyze/rio/commit/079cf8b852)] - Add ability to specify externals (Neil Kistner)
* [[`057bd052ba`](https://github.com/wyze/rio/commit/057bd052ba)] - Upgrade dependencies (Neil Kistner)

## License

MIT © [Neil Kistner](//neilkistner.com)

[actions-image]: https://img.shields.io/github/workflow/status/wyze/rio/CI.svg?style=flat-square
[actions-url]: https://github.com/wyze/rio/actions

[npm-image]: https://img.shields.io/npm/v/@wyze/rio.svg?style=flat-square
[npm-url]: https://npmjs.com/package/@wyze/rio

[codecov-image]: https://img.shields.io/codecov/c/github/wyze/rio.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wyze/rio
