import App from './containers/App'
import Index from './containers/Index'
import NotFound from './containers/NotFound'

export default [
	{
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: Index	
			},
			{
				path: '*',
       			component: NotFound
    		}
		]
	}
]