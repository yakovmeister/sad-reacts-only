import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { users, user, login } from './actions'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      users,
      user
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      login
    }
  })
})