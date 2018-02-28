import application from './controllers/application'
import logging from './controllers/Logging'
import NotFound from './controllers/errors/NotFound'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import schema from './schema'

const GQ = '/gq/v1'
const API = '/api/v1'
/* create your route here */
const routes = (app) => {
	/** api */
  app.use(GQ, graphqlHTTP({ schema }))
	app.get(/^(?!\/api).*$/, application)
	app.get('*', NotFound)
}

export default routes
