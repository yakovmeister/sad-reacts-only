import React from 'react'
import { renderToString } from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import { matchRoutes, renderRoutes } from 'react-router-config'
import routes from './../client/routes'

export default (req, res) => {
	const context = {}
	const content = renderToString(
		<StaticRouter location={req.url} context={context}>
	    { renderRoutes(routes) }
	  </StaticRouter>
	)

 	res.render('index', { content })
}
