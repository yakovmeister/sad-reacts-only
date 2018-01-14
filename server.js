// const { default: Server } = require('./src/Server/http')
// const { default: routes } = require('./app/route')
// const { env: init_env, Config, base_path } = require('./src/utility')
// const env = init_env()
// const config = new Config(env, base_path() + '/config')
const { default: Thoughts } = require('./src/Database/Thoughts')
// global.thoughts = new Thoughts()

// const args = Object.assign(
//   {},
//   config.get('app'),
//   { publicPath: base_path() + '/public' }
// )

// const app = Server(args)

// app.configure(app => routes(app))
// app.start()
const t = new Thoughts()

const Users = t.createModel('users')

const users = new Users()


users.all().then(console.log)