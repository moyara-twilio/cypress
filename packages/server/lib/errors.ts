import errors from '@packages/errors'

const isProduction = () => {
  return process.env['CYPRESS_INTERNAL_ENV'] === 'production'
}

const logException = async function (this: any, err) {
  // TODO: remove context here
  if (this.log(err) && isProduction()) {
    // log this exception since its not a known error
    await require('./exception').create(err)
  }
}

const errorApi = {
  ...errors,
  logException,
}

export = errorApi
