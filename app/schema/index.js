import { GraphQLObjectType, GraphQLSchema, GraphQLString, printSchema } from 'graphql'
import Users from './users'

export default new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        users: {
          type: Users,
          resolve: (_, args) => {
            return {
              id: 'sample',
              username: 'aw'
            }
          }
        }
      }
  })
})