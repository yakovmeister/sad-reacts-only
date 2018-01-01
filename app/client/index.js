import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './containers/App'

render(
	<Router>
		<App />
	</Router>
, document.getElementById('app'))