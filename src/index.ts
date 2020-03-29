import { Result } from 'meow'
import { RollupFileOptions, rollup } from 'rollup'
import bucklescript from 'rollup-plugin-bucklescript'
import builtins from 'builtins'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import sucrase from 'rollup-plugin-sucrase'

const whenMatch = (match: boolean, plugin: () => unknown) =>
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
  inlineDynamicImports: false,
  input: '', // Will be overwritten in build function
}

const build = async (input: string, flags: Result['flags']) => {
  const { banner, externals, format, output: file } = flags
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
  const external = builtins()
    .concat(externals !== undefined ? externals.split(',') : undefined)
    .filter(Boolean)

  const bundle = await rollup({ ...options, external, input, plugins })

  await bundle.write({ banner, file, format })
}

export default build
