import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLInt } from 'graphql'
import Users from './users'
import UsersModel from './../models/Users'

const users = new UsersModel()

export default new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        users: {
          type: new GraphQLList(Users),
          resolve: (root) => {
            return users.all()
          }
        },
        user: {
          type: Users,
          args: {
            id: {
              name: 'id',
              type: GraphQLInt
            }
          },
          resolve: (root, { id }) => {
            return users.find(id)
          }
        }
      }
  })
})