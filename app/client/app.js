import { 
  compose
  , createStore
  , combineReducers
  , applyMiddleware
} from 'redux'
import { 
  push
  , routerReducer
  , ConnectedRouter
  , routerMiddleware
} from 'react-router-redux'
import {
  Link
  , Route
  , Switch
  , BrowserRouter as Router
} from 'react-router-dom'
import React, { PureComponent } from 'react'
import routes from './routes'
import reducers from './reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { renderRoutes } from 'react-router-config'
import { InMemoryCache } from 'apollo-cache-inmemory'
import createHistory from 'history/createBrowserHistory'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.history = createHistory()
    this.middleware = routerMiddleware(this.history)
    this.composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    this.store = createStore(
      reducers
      , this.composeEnhancers(
        applyMiddleware(this.middleware)
      )
    )
    // this.client = new ApolloClient({
    //   // static for now
    //   link: createHttpLink({ uri: 'http://localhost:8888/api/v1' }),
    //   cache: new InMemoryCache
    // })
  }

  render() {
    return (
      <Provider store={ this.store }>
        <ConnectedRouter history={ this.history }>
          <Switch>
            { renderRoutes(routes) }
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

if(module.hot) {
  console.log('hot reload enabled')
  module.hot.accept(App)
}

render(<App /> , document.getElementById('app'))
