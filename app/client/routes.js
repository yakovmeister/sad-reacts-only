import App from './containers/App'
import Root from './containers/Root'
import Index from './containers/Index'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

const app = [
	{
		exact: true,
		component: Index
  }
]

export default [
	{
		component: Root,
		routes: [
      {
        path: '/',
        exact: true,
        component: Login
      },
      {
        path: '/app',
				routes: app,
        component: App,
        exact: true
      },
      {
        component: NotFound
      }
    ]
	}
]