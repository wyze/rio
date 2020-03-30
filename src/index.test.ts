import * as readPkg from 'read-pkg'
import * as rollupModule from 'rollup'
import build from '.'
import builtins from 'builtins'

jest.mock('read-pkg')

afterEach(jest.resetAllMocks)

test('it calls rollup.build and outputs a file', async () => {
  const rollup = jest.spyOn(rollupModule, 'rollup').mockImplementation(() => {
    const actual = require.requireActual('rollup').rollup

    return Promise.resolve({ ...actual, write: jest.fn() })
  })

  await build('in.ts', { format: 'cjs', output: 'out.js' })

  const { write } = await rollup.mock.results[0].value

  expect(rollup).toHaveBeenCalledWith(
    expect.objectContaining({ external: builtins(), input: 'in.ts' })
  )
  expect(write).toHaveBeenCalledWith({ file: 'out.js', format: 'cjs' })
})

test('works properly with --binary flag', async () => {
  const rollup = jest.spyOn(rollupModule, 'rollup').mockImplementation(() => {
    const actual = require.requireActual('rollup').rollup

    return Promise.resolve({ ...actual, write: jest.fn() })
  })

  jest.spyOn(readPkg, 'default').mockResolvedValue({
    name: 'a-fixture',
    license: 'MIT',
    dependencies: {
      'a-dependency': '*',
    },
  })

  await build('in.ts', { binary: true, format: 'cjs', output: undefined })

  const { write } = await rollup.mock.results[0].value

  expect(rollup).toHaveBeenCalledWith(
    expect.objectContaining({
      external: [...builtins(), 'a-dependency'],
      input: 'in.ts',
    })
  )
  expect(write).toHaveBeenCalledWith({
    banner: '#!/usr/bin/env node',
    file: 'bin/index.js',
    format: 'cjs',
  })
})
