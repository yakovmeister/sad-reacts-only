import dotenv from 'dotenv'
import utils from './src/utility'
import Config from './src/utility/Config'
import Server from './src/Server/http'
import routes from './app/route'

/** initialize environment configuration */
dotenv.config()

Object.keys(utils).map(function util(util) {
  if (util !== 'Config') {
    global[util] = utils[util]
  }
})

global.config = new Config(base_path() + '/config')

const app = new Server({
  port: env('SERVER_PORT', 8888),
  secret: env('APP_SECRET', 'SomeRandomString'),
  viewPath: config.get('app').viewPath,
  publicPath: './public'
})

app.configure(app => routes(app))
app.start()
