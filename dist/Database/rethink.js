'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rethinkdb = require('rethinkdb');

var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

var _privateProps = require('private-props');

var _privateProps2 = _interopRequireDefault(_privateProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rethink = function () {
  function Rethink() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Rethink);

    (0, _privateProps2.default)(this).connection = null;
    (0, _privateProps2.default)(this).r = _rethinkdb2.default;
    (0, _privateProps2.default)(this).options = {
      host: opts.host || '127.0.0.1',
      port: opts.port || 28015,
      db: opts.db || 'test',
      user: opts.user || 'admin',
      password: opts.password || '',
      timeout: opts.timeout || 20,
      ssl: opts.ssl || null
    };
  }

  _createClass(Rethink, [{
    key: 'open',
    value: function open() {
      var _Private$options = (0, _privateProps2.default)(this).options,
          host = _Private$options.host,
          port = _Private$options.port,
          db = _Private$options.db,
          user = _Private$options.user,
          password = _Private$options.password,
          timeout = _Private$options.timeout,
          ssl = _Private$options.ssl;


      (0, _privateProps2.default)(this).connection = (0, _privateProps2.default)(this).r.connect({
        host: host,
        port: port,
        db: db,
        user: user,
        password: password,
        timeout: timeout,
        ssl: ssl
      });

      return this;
    }
  }, {
    key: 'changeDb',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(database) {
        var connection;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _privateProps2.default)(this).connection;

              case 2:
                connection = _context.sent;


                connection.use(database);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function changeDb(_x2) {
        return _ref.apply(this, arguments);
      }

      return changeDb;
    }()
  }, {
    key: 'console',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(closure) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = closure((0, _privateProps2.default)(this).r);
                _context2.next = 3;
                return (0, _privateProps2.default)(this).connection;

              case 3:
                _context2.t1 = _context2.sent;
                _context2.next = 6;
                return _context2.t0.run.call(_context2.t0, _context2.t1);

              case 6:
                return _context2.abrupt('return', _context2.sent);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function console(_x3) {
        return _ref2.apply(this, arguments);
      }

      return console;
    }()
  }, {
    key: 'query',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(closure) {
        var results;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = closure((0, _privateProps2.default)(this).r).coerceTo('array');
                _context3.next = 3;
                return (0, _privateProps2.default)(this).connection;

              case 3:
                _context3.t1 = _context3.sent;
                _context3.next = 6;
                return _context3.t0.run.call(_context3.t0, _context3.t1);

              case 6:
                results = _context3.sent;
                return _context3.abrupt('return', results);

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function query(_x4) {
        return _ref3.apply(this, arguments);
      }

      return query;
    }()
  }]);

  return Rethink;
}();

exports.default = Rethink;
//# sourceMappingURL=rethink.js.map
