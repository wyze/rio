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
    $ rio [options] <input>

  Options
    --banner,    -b   Add banner to top of output file
    --binary          Pass good defaults for binary files
    --externals, -e   Add external files that shouldn't be bundled
    --format,    -f   Output file format (esm, umd, etc.)
    --output,    -o   Output file

  Examples
    $ rio -o out.js in.ts
    $ rio -o out.js -f esm in.ts
    $ rio -o out.js -e chalk,debug in.ts
    $ rio -o out.js -b '#!/usr/bin/env node' in.ts
    $ rio --binary in.ts
```

### --binary Flag

This will make the following changes:

- Automatically include all package dependencies as externals
- Set `banner` option to: `#!/usr/bin/env node`
- Set `output` option to: `bin/index.js`

## Change Log

> [Full Change Log](changelog.md)

### [v1.4.0](https://github.com/wyze/rio/releases/tag/v1.4.0) (2020-03-30)

* Add binary flag ([@wyze](https://github.com/wyze) in [f295c17](https://github.com/wyze/rio/commit/f295c17))

## License

MIT © [Neil Kistner](//neilkistner.com)

[actions-image]: https://img.shields.io/github/workflow/status/wyze/rio/CI.svg?style=flat-square
[actions-url]: https://github.com/wyze/rio/actions

[npm-image]: https://img.shields.io/npm/v/@wyze/rio.svg?style=flat-square
[npm-url]: https://npmjs.com/package/@wyze/rio

[codecov-image]: https://img.shields.io/codecov/c/github/wyze/rio.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wyze/rio
