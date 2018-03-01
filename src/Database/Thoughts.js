import r from 'rethinkdb'

export default class Thoughts {
  static defaultOpts = {
    host: 'localhost',
    port: 28015,
    db: 'test',
    user: 'admin',
    password: '',
    timeout: 20,
    ssl: 'None'
  }

  constructor(opts) {
    this.opts = { ...Thoughts.defaultOpts, ...opts }
  }

  open() {
    return r.connect(this.opts)
  }
}
