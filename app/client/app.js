import React from 'react'
import { render } from 'react-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


render(
	<Router>
		{ renderRoutes(routes) }
	</Router>
, document.getElementById('app'))