const logger = require(`../../lib/logger`)
const chalk = require('chalk')
const errors = require('../../lib/errors')

context('.logException', () => {
  beforeEach(() => {
    sinon.stub(console, 'log')
  })

  it('calls logger.logException with unknown error', () => {
    sinon.stub(logger, 'logException').resolves()
    sinon.stub(process.env, 'CYPRESS_INTERNAL_ENV').value('production')

    const err = new Error('foo')

    return errors.logException(err)
    .then(() => {
      expect(console.log).to.be.calledWith(chalk.red(err.stack ?? ''))

      expect(logger.logException).to.be.calledWith(err)
    })
  })

  it('converts markdown links in err.message', () => {
    const err = errors.get('NO_PROJECT_ID', `
      This line has [linked text](https://on.cypress.io) in it. There's a period in the middle.

      This line has [linked text at the end](https://on.cypress.io).

      This line has [linked text](https://on.cypress.io) with no period
    `)

    errors.log(err)

    expect(console.log).to.be.calledWithMatch('This line has linked text in it. There\'s a period in the middle: https://on.cypress.io')
    expect(console.log).to.be.calledWithMatch('This line has linked text at the end: https://on.cypress.io')
    expect(console.log).to.be.calledWithMatch('This line has linked text with no period: https://on.cypress.io')
  })

  it('logs err.details', () => {
    const err = errors.get('PLUGINS_FUNCTION_ERROR', 'foo/bar/baz', 'details huh')

    const ret = errors.log(err)

    expect(ret).to.be.undefined

    expect(console.log).to.be.calledWithMatch('foo/bar/baz')

    expect(console.log).to.be.calledWithMatch(`\n${ chalk.yellow('details huh')}`)
  })

  it('logs err.stack in development', () => {
    process.env.CYPRESS_INTERNAL_ENV = 'development'

    const err = new Error('foo')

    const ret = errors.log(err)

    expect(ret).to.eq(err)

    expect(console.log).to.be.calledWith(chalk.red(err.stack))
  })

  it('does not call logger.logException when known error', () => {
    sinon.stub(logger, 'logException').resolves()
    sinon.stub(process.env, 'CYPRESS_INTERNAL_ENV').value('production')

    const err = errors.getError('NOT_LOGGED_IN')

    return errors.logException(err)
    .then(() => {
      expect(console.log).not.to.be.calledWith(err.stack)

      expect(logger.logException).not.to.be.called
    })
  })

  it('does not call logger.logException when not in production env', () => {
    sinon.stub(logger, 'logException').resolves()
    sinon.stub(process.env, 'CYPRESS_INTERNAL_ENV').value('development')

    const err = new Error('foo')

    return errors.logException(err)
    .then(() => {
      expect(console.log).not.to.be.calledWith(err.stack)

      expect(logger.logException).not.to.be.called
    })
  })

  it('swallows creating exception errors', () => {
    sinon.stub(logger, 'logException').rejects(new Error('foo'))
    sinon.stub(process.env, 'CYPRESS_INTERNAL_ENV').value('production')

    const err = errors.getError('NOT_LOGGED_IN')

    return errors.logException(err)
    .then((ret) => {
      expect(ret).to.be.undefined
    })
  })
})
