jest.mock('../../src')

afterEach(() => {
  jest.resetModules()
})

test('it shows help message when no arguments received', () => {
  const exit = jest.spyOn(process, 'exit').mockImplementation()
  const log = jest.spyOn(console, 'log').mockImplementation()

  require('.')

  expect(log).toHaveBeenCalledWith(expect.stringContaining('Usage'))
  expect(exit).toHaveBeenCalledWith(0)
})

test('it calls build with proper arguments', () => {
  process.argv.push('-o')
  process.argv.push('out.js')
  process.argv.push('/in.ts')

  const m = require('../../src').default

  require('.')

  expect(m).toHaveBeenCalledWith('/in.ts', {
    format: 'cjs',
    output: 'out.js',
  })
})
