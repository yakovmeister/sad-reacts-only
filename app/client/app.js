import React from 'react'
import { render } from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import routes from './routes'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const client = new ApolloClient({
  // static for now
  link: createHttpLink({ uri: 'http://localhost:8888/api/v1' }),
  cache: new InMemoryCache
})

const p_apolloProvider = {
  client
}

const App = () => (
  <Router>
    <ApolloProvider { ...p_apolloProvider }>
      { renderRoutes(routes) }
    </ApolloProvider>
  </Router>
)

render(<App /> , document.getElementById('app'))