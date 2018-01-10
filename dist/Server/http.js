'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _memorystore = require('memorystore');

var _memorystore2 = _interopRequireDefault(_memorystore);

var _responseTime = require('response-time');

var _responseTime2 = _interopRequireDefault(_responseTime);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var server = function server(config) {
  var port = config.port,
      secret = config.secret,
      viewPath = config.viewPath,
      publicPath = config.publicPath;

  var MS = (0, _memorystore2.default)(_expressSession2.default);

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: false }));
  app.use(_bodyParser2.default.raw({ type: 'application/javascript' }));
  app.use(_bodyParser2.default.raw({ type: 'application/vnd.custom-type' }));
  app.use(_bodyParser2.default.text({ type: 'text/html' }));
  app.use((0, _cookieParser2.default)());
  app.use((0, _responseTime2.default)());
  app.use((0, _compression2.default)());
  app.use((0, _helmet2.default)());
  app.use((0, _expressSession2.default)({
    store: new MS({
      checkPeriod: 86400000
    }),
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
  app.use(_express2.default.static(publicPath));
  app.set('view engine', 'pug');
  app.set('views', viewPath);

  return {
    configure: function configure(callback) {
      return callback(app);
    },
    start: function start() {
      app.listen(port, function () {
        console.log('app running on port', port);
      });
    }
  };
};

exports.default = server;
//# sourceMappingURL=http.js.map
