import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { users, user } from './actions'

export default new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        users,
        user
      }
  })
})