import application from './controllers/application'
import Users from './controllers/Users'
import NotFound from './controllers/errors/NotFound'
import graphqlHTTP from 'express-graphql'

import { buildSchema } from 'graphql'
import schema from './schema'

const API = '/api/v1'
/* create your route here */
const routes = (app) => {
	/** api */
	// app.get(`${API}/users`, Users.index)
	// app.get(`${API}/users/:id`, Users.get)
	// app.post(`${API}/users`, Users.create)
	// app.put(`${API}/users/:id`, Users.edit)
  // app.delete(`${API}/users/:id`, Users.delete)
  
  app.use('/api', graphqlHTTP({
    schema
  }))
	app.get(/^(?!\/api).*$/, application)
	app.get('*', NotFound)
}

export default routes
