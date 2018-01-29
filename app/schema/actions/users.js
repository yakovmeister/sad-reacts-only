import {
	GraphQLList
	, GraphQLString
	, GraphQLInt
} from 'graphql'
import Users from './../../models/Users'
import { users as userType } from './../types'

const users = new Users()

export default {
	users: {
    type: new GraphQLList(userType),
    resolve: (root) => 
			users.all()
  },

  user: {
	  type: userType,
	  resolve: (root, { id }) => 
	  	users.find(id),
	  args: {
	    id: {
	      name: 'id',
	      type: GraphQLInt
	    } 
	  }
	},

	login: {
		type: userType,
		resolve: (root, { username, password }) =>
			users.login(username, password).then(token => token),
		args: {
			username: {
				name: 'username',
				type: GraphQLString
			},
			password: {
				name: 'password',
				type: GraphQLString
			}
		}
	}
}
