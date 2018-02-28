import React from 'react'
import { render } from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { 
  ConnectedRouter
  , routerReducer
  , routerMiddleware
  , push
} from 'react-router-redux'
import { Provider } from 'react-redux'
import { 
  createStore
  , combineReducers
  , applyMiddleware
  , compose
} from 'redux'
import {
  BrowserRouter as Router
  , Switch
  , Route
  , Link
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import routes from './routes'
import reducers from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers
    // insert combined reducers,
    , composeEnhancers(applyMiddleware(...middleware))
  )

const client = new ApolloClient({
  // static for now
  link: createHttpLink({ uri: 'http://localhost:8888/api/v1' }),
  cache: new InMemoryCache
})

const p_apolloProvider = {
  client
}

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <ApolloProvider { ...p_apolloProvider }>
          { renderRoutes(routes) }
        </ApolloProvider>
      </Switch>
    </ConnectedRouter>
  </Provider>
)

render(<App /> , document.getElementById('app'))