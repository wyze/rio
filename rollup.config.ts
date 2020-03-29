import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import sucrase from '@rollup/plugin-sucrase'

export default {
  external: Object.keys(pkg.dependencies || {}),
  input: 'bin/src/index.ts',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'bin/index.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.ts'],
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript'],
    }),
  ],
}
