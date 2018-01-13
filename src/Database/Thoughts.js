import r from './rethink'
import Builder from './Builder'
import Private from 'private-props'
import joi from 'joi'

export default class Thoughts {
	constructor(options) {
		Private(this).r = new r(options)
		Private(this).connection = Private(this).r.open()
		Private(this).builder = new Builder(Private(this).connection)
		Private(this).blueprints = []
	}

	console(callback) {
		return Private(this).r.console(callback)
	}

	// blueprint(table, Callback) {
	// 	const blueprint = {}

	// 	const fns = {
	// 		primaryKey(name) {
	// 			blueprint.primaryKey = name
	// 		},

	// 		index(name) {
	// 			blueprint.indices.push(name)
	// 		}
	// 	}

	// 	Callback = new Callback
		
	// 	blueprint.up = Callback.up.bind(fns)
	// 	blueprint.down = Callback.down.bind()

	// 	Private(this).blueprints.push(blueprint)
	// }

	// up() {
	// 			// const opts = keys.primaryKey
	// 	// 	? {
	// 	// 		primaryKey: keys.primaryKey
	// 	// 	}
	// 	// 	: {}
		
	// 	// await Private(this).builder.create(table, opts)

	// 	// keys.indices.forEach(index => {
	// 	// 	Private(this).builder.index(table, index)
	// 	// })
	// }
}