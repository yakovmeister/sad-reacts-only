import passport from 'passport'
import NotFound from './controllers/errors/NotFound'

/* create your route here */
const routes = (app) => {

	/* default error route */
	app.get('/', (req, res) => {
		res.render('index')
	})

	app.get('*', NotFound)
}

export default routes
