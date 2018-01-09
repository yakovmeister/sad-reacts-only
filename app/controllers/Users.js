import users from './../resolver/user'
import { graphql } from 'graphql'

export default new (class Users {
	index(req, res) {
		graphql(users, `{ all { id, username } }`).then(results => {
			res.send(results)
		})
	}

	get(req, res) {}

	create(req, res) {}

	edit(req, res) {}

	delete(req, res) {}

	login(req, res) {}
})