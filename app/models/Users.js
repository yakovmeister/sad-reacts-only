export default class Users {
	all() {
		return thoughts.console(r =>
			r.table('users').coerceTo('array')
		)
	}

	find(id) {
		return thoughts.console(r => 
			r.table('users').get(id)
		)
	}
}