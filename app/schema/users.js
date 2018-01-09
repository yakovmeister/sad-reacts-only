export default `
	type User {
		id: ID
		username: String!
		full_name: String!
	}

	type Query {
		all: [User!]!
	}
`