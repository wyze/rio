jest.mock('../../../src')

afterEach(() => {
  jest.resetModules()
})

test('it shows help message when no arguments received', () => {
  console.log = jest.fn()
  process.exit = jest.fn()

  require('..')

  expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Usage'))
  expect(process.exit).toHaveBeenCalledWith(0)

  console.log.mockRestore()
  process.exit.mockRestore()
})

test('it calls build with proper arguments', () => {
  process.argv.push('-o')
  process.argv.push('out.js')
  process.argv.push('/in.ts')

  const m = require('../../../src').default

  require('..')

  expect(m).toHaveBeenCalledWith('/in.ts', expect.objectContaining({
    f: 'cjs',
    format: 'cjs',
    o: 'out.js',
    output: 'out.js',
  }))
})
