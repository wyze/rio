import { RollupFileOptions, rollup } from 'rollup'
import { Result } from 'meow'
import builtins = require('builtins')
import bucklescript from 'rollup-plugin-bucklescript'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import sucrase from 'rollup-plugin-sucrase'

const whenMatch = (match: boolean, plugin: () => any) =>
  match ? plugin() : undefined

const maybeAddScript = (input: string) =>
  whenMatch(/\.m?(j|t)sx?$/.test(input), () =>
    sucrase({
      exclude: ['node_modules/**'],
      transforms: [whenMatch(/\.tsx?/.test(input), () => 'typescript')],
    })
  )

const maybeAddReason = (input: string) =>
  whenMatch(/\.(ml|re)$/.test(input), bucklescript)

const options: RollupFileOptions = {
  external: builtins(),
  inlineDynamicImports: false,
  input: '', // Will be overwritten in build function
}

const build = async (input: string, flags: Result['flags']) => {
  const { format, output: file } = flags
  const plugins = [
    json(),
    maybeAddScript(input),
    maybeAddReason(input),
    commonjs({
      include: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
  ].filter(Boolean)

  const bundle = await rollup({ ...options, input, plugins })

  await bundle.write({ file, format })
}

export default build
