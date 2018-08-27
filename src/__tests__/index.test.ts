import build from '..'

jest.mock('rollup', () => ({
  rollup: jest.fn(() =>
    Promise.resolve({
      write: jest.fn(),
    })
  ),
}))

test('it calls rollup.build and outputs a file', async () => {
  const { rollup } = require('rollup')

  await build('in.ts', { format: 'cjs', output: 'out.js' })

  const { write } = await rollup.mock.results[0].value

  expect(rollup).toHaveBeenCalledWith(
    expect.objectContaining({ input: 'in.ts' })
  )
  expect(write).toHaveBeenCalledWith({ file: 'out.js', format: 'cjs' })
})
