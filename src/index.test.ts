import * as rollupModule from 'rollup'
import build from '.'

test('it calls rollup.build and outputs a file', async () => {
  const rollup = jest.spyOn(rollupModule, 'rollup').mockImplementation(() => {
    const actual = require.requireActual('rollup').rollup

    return Promise.resolve({ ...actual, write: jest.fn() })
  })

  await build('in.ts', { format: 'cjs', output: 'out.js' })

  const { write } = await rollup.mock.results[0].value

  expect(rollup).toHaveBeenCalledWith(
    expect.objectContaining({ input: 'in.ts' })
  )
  expect(write).toHaveBeenCalledWith({ file: 'out.js', format: 'cjs' })
})
