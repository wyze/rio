import meow from 'meow'
import rio from '../../src'

const cli = meow(
  `
  Usage
    $ rio <input>

  Options
    --format, -f   Output file format (esm, umd, etc.)
    --output, -o   Output file

  Examples
    $ rio -o out.js in.ts
    $ rio -o out.js -f esm in.ts
`,
  {
    flags: {
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
