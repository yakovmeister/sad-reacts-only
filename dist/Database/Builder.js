'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _privateProps = require('private-props');

var _privateProps2 = _interopRequireDefault(_privateProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Builder = function () {
  function Builder(r) {
    _classCallCheck(this, Builder);

    (0, _privateProps2.default)(this).r = r;
  }

  _createClass(Builder, [{
    key: 'create',
    value: function create(table) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return (0, _privateProps2.default)(this).r.console(function (r) {
        return r.tableCreate(table, options);
      });
    }
  }, {
    key: 'index',
    value: function index(table, column) {
      return (0, _privateProps2.default)(this).r.console(function (r) {
        return r.table(table).indexCreate(column);
      });
    }
  }, {
    key: 'down',
    value: function down(table) {
      return (0, _privateProps2.default)(this).r.console(function (r) {
        return r.tableDrop(table);
      });
    }
  }, {
    key: 'list',
    value: function list() {
      return (0, _privateProps2.default)(this).r.console(function (r) {
        return r.tableList();
      });
    }
  }]);

  return Builder;
}();

exports.default = Builder;
//# sourceMappingURL=Builder.js.map
