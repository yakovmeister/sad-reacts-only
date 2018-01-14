import {
	GraphQLList
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
	}
}
