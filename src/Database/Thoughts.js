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
		Private(this).schema = {}
	}

	createModel(table, callback) {
		Private(this).schema = joi.object().keys(callback(joi))
		const rdb = Private(this).r
		const schema = Private(this).schema

		return class {
			constructor() {
				this.table = table
			}

			all(opts) {
				return rdb.console(cmd => 
					cmd.table(table).coerceTo('array')
				)
			}

			get(id) {
				return rdb.console(cmd => 
					cmd.table(table).get(id)
				)
			}

			async create(obj) {
				const validation = await joi.validate(obj, schema)

				if (validation.error) {
					return validation.error
				}

				return rdb.console(cmd => 
					cmd.table(table).insert(obj)
				)
			}

			update(id) {
				return rdb.console(cmd =>
					cmd.table(table).get(obj.id).update(obj)
				)
			}

			delete(id) {
				return rdb.console(cmd =>
					cmd.table(table).get(id).delete()
				)
			}

			extendModel(name, fn) {
				this[name] = new Proxy(fn, {
					apply: function apply(fn, arg, args) {
						return rdb.console(cmd => 
							fn(cmd.table(table), ...args)
						)
					}
				})
			}
		}
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