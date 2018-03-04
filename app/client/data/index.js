import users from './users'

export default {
	mappings: {
		...users.mappings,
		default: ({ ownProps, mutate }) => ({})
	},
	queries: {
		...users.queries,
		default: {}
	}
}