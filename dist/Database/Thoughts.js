'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rethink = require('./rethink');

var _rethink2 = _interopRequireDefault(_rethink);

var _Builder = require('./Builder');

var _Builder2 = _interopRequireDefault(_Builder);

var _privateProps = require('private-props');

var _privateProps2 = _interopRequireDefault(_privateProps);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Thoughts = function () {
	function Thoughts(options) {
		_classCallCheck(this, Thoughts);

		(0, _privateProps2.default)(this).r = new _rethink2.default(options);
		(0, _privateProps2.default)(this).connection = (0, _privateProps2.default)(this).r.open();
		(0, _privateProps2.default)(this).builder = new _Builder2.default((0, _privateProps2.default)(this).connection);
		(0, _privateProps2.default)(this).blueprints = [];
		(0, _privateProps2.default)(this).schema = {};
	}

	_createClass(Thoughts, [{
		key: 'createModel',
		value: function createModel(table, callback) {
			(0, _privateProps2.default)(this).schema = _joi2.default.object().keys(callback(_joi2.default));
			var rdb = (0, _privateProps2.default)(this).r;
			var schema = (0, _privateProps2.default)(this).schema;

			return function () {
				function _class() {
					_classCallCheck(this, _class);

					this.table = table;
					this._hasOne = [];
					this._hasMany = [];
					this._belongsTo = [];
					this._belongsToMany = [];
				}

				_createClass(_class, [{
					key: 'all',
					value: function all() {
						var _this = this;

						var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

						var excepts = [];

						return rdb.console(function (cmd) {
							var base = cmd.table(table);

							if (Object.keys(_this._hasOne).length || Object.keys(_this._hasMany).length) {
								base = base.merge(function (e) {
									var relations = {};

									_this._hasOne.forEach(function (single) {
										excepts.push(single.table + '_id');

										relations[single.table] = cmd.table(single.table).get(e(single.table + '_id')).default({});
									});

									_this._hasMany.forEach(function (many) {
										excepts.push(many.table + '_id');

										relations[many.table] = cmd.table(many.table).getAll(e(many.table + '_id')).coerceTo('array').default([]);
									});

									return relations;
								});
							}

							return base.without(excepts).coerceTo('array');
						});
					}
				}, {
					key: 'get',
					value: function get(id) {
						return rdb.console(function (cmd) {
							return cmd.table(table).get(id);
						});
					}
				}, {
					key: 'create',
					value: function () {
						var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj) {
							var validation;
							return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											_context.next = 2;
											return _joi2.default.validate(obj, schema);

										case 2:
											validation = _context.sent;

											if (!validation.error) {
												_context.next = 5;
												break;
											}

											return _context.abrupt('return', validation.error);

										case 5:
											return _context.abrupt('return', rdb.console(function (cmd) {
												return cmd.table(table).insert(obj);
											}));

										case 6:
										case 'end':
											return _context.stop();
									}
								}
							}, _callee, this);
						}));

						function create(_x2) {
							return _ref.apply(this, arguments);
						}

						return create;
					}()
				}, {
					key: 'update',
					value: function update(id) {
						return rdb.console(function (cmd) {
							return cmd.table(table).get(obj.id).update(obj);
						});
					}
				}, {
					key: 'delete',
					value: function _delete(id) {
						return rdb.console(function (cmd) {
							return cmd.table(table).get(id).delete();
						});
					}
				}, {
					key: 'hasOne',
					value: function hasOne(table, fk) {
						this._hasOne.push({
							table: table,
							foreign: fk || table + '_id'
						});
					}
				}, {
					key: 'hasMany',
					value: function hasMany(table, fk) {
						this._hasMany.push({
							table: table,
							foreign: fk || table + '_id'
						});
					}
				}, {
					key: 'extendModel',
					value: function extendModel(name, fn) {
						if (this[name]) {
							throw new Error(name + ' already exist in ' + table + ' class');
						}

						this[name] = new Proxy(fn, {
							apply: function apply(fn, arg, args) {
								return rdb.console(function (cmd) {
									return fn.apply(undefined, [cmd.table(table)].concat(_toConsumableArray(args)));
								});
							}
						});
					}
				}]);

				return _class;
			}();
		}
	}, {
		key: 'console',
		value: function console(callback) {
			return (0, _privateProps2.default)(this).r.console(callback);
		}

		// blueprint(table, Callback) {
		// 	const blueprint = {}

		// 	const fns = {
		// 		primaryKey(name) {
		// 			blueprint.primaryKey = name
		// 		},

		// 		index(name) {
		// 			blueprint.indices.push(name)
		// 		}
		// 	}

		// 	Callback = new Callback

		// 	blueprint.up = Callback.up.bind(fns)
		// 	blueprint.down = Callback.down.bind()

		// 	Private(this).blueprints.push(blueprint)
		// }

		// up() {
		// 			// const opts = keys.primaryKey
		// 	// 	? {
		// 	// 		primaryKey: keys.primaryKey
		// 	// 	}
		// 	// 	: {}

		// 	// await Private(this).builder.create(table, opts)

		// 	// keys.indices.forEach(index => {
		// 	// 	Private(this).builder.index(table, index)
		// 	// })
		// }

	}]);

	return Thoughts;
}();

exports.default = Thoughts;
//# sourceMappingURL=Thoughts.js.map
