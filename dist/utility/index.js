'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Config = exports.load = exports.base_path = exports.rename = exports.remove = exports.env = exports.get_filename = exports.is_directory = exports.is_file = exports.read_directory = exports.exists = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Config = require('./Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = function env() {
	_dotenv2.default.config();

	return function (key, value) {
		process.env[key] = process.env[key] ? process.env[key] : value;

		return process.env[key];
	};
};

var load = function load(dir) {
	var instantiate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	if (!is_directory(dir) && !is_file(dir)) throw new Error(dir + ' is not a valid directory/file.');

	var loaded = {};

	if (is_file(dir)) {
		if (dir.includes('.js')) {
			var obj = instantiate ? new (require(dir))() : require(dir),
			    key = get_filename(dir);

			loaded[key] = obj;
		}
	} else {
		var files = read_directory(dir);

		files.forEach(function (file) {
			if (is_file(dir + _path2.default.sep + file) && file.includes('.js')) {
				var _obj = instantiate ? new (require(dir + _path2.default.sep + file))() : require(dir + _path2.default.sep + file),
				    _key = file.split('.')[0];

				loaded[_key] = _obj;
			}
		});
	}

	return loaded;
};

var exists = function exists(dir) {
	return _fsExtra2.default.existsSync(dir);
};

var remove = function remove(path) {
	return _fsExtra2.default.unlinkSync(path);
};

var rename = function rename(target, new_alias) {
	return _fsExtra2.default.renameSync(target, new_alias);
};

var is_file = function is_file(dir) {
	return exists(dir) ? _fsExtra2.default.statSync(dir).isFile() : false;
};

var base_path = function base_path() {
	return _path2.default.resolve(process.cwd());
};

var is_directory = function is_directory(dir) {
	return exists(dir) ? _fsExtra2.default.statSync(dir).isDirectory() : false;
};

var get_filename = function get_filename(dir) {
	return dir.split(_path2.default.sep)[dir.split(_path2.default.sep).length - 1].split('.')[0];
};

var read_directory = function read_directory(dir) {
	return _fsExtra2.default.readdirSync(dir);
};

exports.exists = exists;
exports.read_directory = read_directory;
exports.is_file = is_file;
exports.is_directory = is_directory;
exports.get_filename = get_filename;
exports.env = env;
exports.remove = remove;
exports.rename = rename;
exports.base_path = base_path;
exports.load = load;
exports.Config = _Config2.default;
//# sourceMappingURL=index.js.map
