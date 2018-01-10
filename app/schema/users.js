import { GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: {
      type: GraphQLString
    }
  }
})