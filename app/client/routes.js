import App from './containers/App'
import Root from './containers/Root'
import Index from './containers/Index'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

const app = [
	{
		path: '/app',
		exact: true,
		component: Index
  },
  {
    path: '*',
    component: NotFound
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
				routes: app,
        component: App,
        exact: true
      }
    ]
	}
]