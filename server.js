// const { default: Server } = require('./src/Server/http')
// const { default: routes } = require('./app/route')
// const { env: init_env, Config, base_path } = require('./src/utility')
// const env = init_env()
// const config = new Config(env, base_path() + '/config')
// const { default: Thoughts } = require('./src/Database/Thoughts')
// global.thoughts = new Thoughts()

// const args = Object.assign(
//   {},
//   config.get('app'),
//   { publicPath: base_path() + '/public' }
// )

// const app = Server(args)

// app.configure(app => routes(app))
// app.start()

const {default: Thoughts} = require('./src/Database/Thoughts')

const thoughts = new Thoughts()

const Users = thoughts.createModel('users', (schema) => {
	return {
		name: schema.string().required()
	}
})

const users = new Users()

const res = users.create({
	name: 4
})

res.then(console.log)
.catch(console.error)

// users.extendModel('getSomething', (r, start, limit) => 
// 	r.slice(start, limit).coerceTo('array')
// )

// users.getSomething(0, 1).then(console.log)