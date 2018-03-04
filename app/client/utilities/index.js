// import gql from 'graphql-tag'
// import { connect } from 'react-redux'
// import { graphql } from 'react-apollo'
// import data from '../data'

// export default {
//   connect: (component, selector, graphQL) => {
//     if (selector) {
//       return connect(state => selector(state))(graphql(data.queries[graphQL], { 
//         props: data.mappings[graphQL]
//       }))
//     }

//     return connect(state => state)(graphql(data.queries[graphQL], { 
//       props: data.mappings[graphQL]
//     }))
//   }

//   // apolloConnect: (graphQL) => {
//   //   return graphql(data.queries[graphQL], { props: data.mappings[graphQL] })
//   // }
// } 

// // const queries = {}
// // const mutations = {
// //   users: gql`
// //     query {
// //       users {
// //         id,
// //         username
// //       }
// //     }
// //   `,
// //   login: gql`
// //     mutation($username: String!, $password: String!) {
// //       login(username: $username, password: $password) {
// //         token,
// //         error
// //       }
// //     }
// //   `
// // }

// // module.exports = {
// //   login: graphql(mutations.login, {
// //     props: ({ ownProps, mutate }) => ({
// //       login(username, password) {
// //         return mutate({
// //           variables: {
// //             username,
// //             password
// //           }
// //         }).then(({ data }) => {
// //           if (data) {
// //             window.localStorage.token = data.login.token
// //           }

// //           throw new Error('User does not exist.')
// //         })
// //         .catch(reject => {
// //           throw new Error(reject.graphQLErrors[0].message)
// //         })
// //       }
// //     })
// //   })
// // }