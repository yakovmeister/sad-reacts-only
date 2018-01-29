import { GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: {
      type: GraphQLString
    },
    username: {
    	type: GraphQLString
    },
    token: {
      type: GraphQLString
    },
    error: {
      type: GraphQLString
    }
  }
})