import userSchema from './../schema/users'
import { makeExecutableSchema } from 'graphql-tools'

const sampleData = [
	{
		id: 4,
		username: 'admin'
	},
	{
		id: 5,
		username: 'normal',
		full_name: 'John Doggo'
	}
]

const root = {
	Query: {
		all: () => sampleData	
	}
}

export default makeExecutableSchema({ typeDefs: userSchema, resolvers: root })
