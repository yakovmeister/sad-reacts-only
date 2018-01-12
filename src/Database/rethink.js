import r from 'rethinkdb'
import Private from 'private-props'

export default class Rethink {
  constructor(opts = {}) {
    Private(this).connection = null
    Private(this).r = r
    Private(this).options = {
      host: opts.host || 'localhost',
      port: opts.port || 28015,
      db: opts.db || 'test',
      user: opts.user || 'admin',
      password: opts.password || '',
      timeout: opts.timeout || 20,
      ssl: opts.ssl || null
    }
  }

  open() {
    const { host, port, db, user, password, timeout, ssl } = Private(this).options

    Private(this).connection = Private(this).r.connect({
      host,
      port,
      db,
      user,
      password,
      timeout,
      ssl
    })

    return this
  }

  async changeDb(database) {
    const connection = await Private(this).connection

    connection.use(database)
  }

  async console(closure) {
    const results = await closure(Private(this).r)
      .run(await Private(this).connection)

    return results
  }

  async query(closure) {
    const results = await closure(Private(this).r)
      .coerceTo('array')
      .run(await Private(this).connection)

    return results
  }
}
