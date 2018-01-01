import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import compression from 'compression'
import session from 'express-session'
import memoryStore from 'memorystore'
import responseTime from 'response-time'
import cors from 'cors'

const app = express()

const server = (config) => {
	const { port, secret, viewPath, publicPath } = config
 	const MS = memoryStore(session)

	app.use(bodyParser.json({ type: 'application/*+json' }))
	app.use(bodyParser.raw({ type: 'application/javascript' }))
	app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
	app.use(bodyParser.text({ type: 'text/html' }))
	app.use(cookieParser())
	app.use(responseTime())
	app.use(compression())
	app.use(helmet())
	app.use(session({
		store: new MS({
			checkPeriod: 86400000
		}),
		secret,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true }
	}))
	app.use(express.static(publicPath))
	app.set('view engine', 'pug')
	app.set('views', viewPath)

	return {
		configure: (callback) => callback(app),
		start: () => {
			app.listen(port, () => {
				console.log('app running on port', port)
			})
		}
	}
}


export default server