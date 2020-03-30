import { InputOptions, ModuleFormat, rollup } from 'rollup'
import bucklescript from 'rollup-plugin-bucklescript'
import builtins from 'builtins'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import readPkg from 'read-pkg'
import resolve from '@rollup/plugin-node-resolve'
import sucrase from '@rollup/plugin-sucrase'

type Flags = {
  banner?: string
  binary?: boolean
  externals?: string
  format: string
  output: string
}

const whenMatch = <T extends unknown>(match: boolean, plugin: () => T) =>
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

const options: InputOptions = {
  inlineDynamicImports: false,
  input: '', // Will be overwritten in build function
}

const build = async (input: string, flags: Flags) => {
  const { binary, externals } = flags
  const banner = flags.banner ?? (binary ? '#!/usr/bin/env node' : undefined)
  const file = flags.output ?? (binary ? 'bin/index.js' : undefined)
  const format = flags.format as ModuleFormat
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
    .concat(
      binary ? Object.keys((await readPkg()).dependencies || {}) : undefined
    )
    .concat(externals !== undefined ? externals.split(',') : undefined)
    .filter(Boolean)

  const bundle = await rollup({ ...options, external, input, plugins })

  await bundle.write({ banner, file, format })
}

export default build
