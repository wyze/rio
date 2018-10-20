import meow from 'meow'
import rio from '../../src'

const cli = meow(
  `
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
`,
  {
    flags: {
      banner: {
        alias: 'b',
        type: 'string',
      },
      externals: {
        alias: 'e',
        type: 'string',
      },
      format: {
        alias: 'f',
        type: 'string',
        default: 'cjs',
      },
      output: {
        alias: 'o',
        type: 'string',
      },
    },
  }
)

const { input, flags, showHelp } = cli

if (input.length === 0) {
  showHelp(0)
}

rio(input[0], flags)
