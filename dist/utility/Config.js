'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
  function Config(env, configPath) {
    _classCallCheck(this, Config);

    if (!env) {
      throw new Error('No env function passed.');
    }

    this.instance = undefined;
    this.env = env;
    this.configs = {};
    this.configPaths = configPath ? Array.isArray(configPath) ? configPath : [configPath] : [];

    /** initially load from file if there's any */
    this.loadFromFileBulk(this.configPaths);
  }

  /**
   * Initialize configuration files, save all data from config path into our object
   * @param {String} dir directory to search for configuration files
   * @return this
   */


  _createClass(Config, [{
    key: 'loadFromFile',
    value: function loadFromFile(dir) {
      var _this = this;

      if (!(0, _index.is_directory)(dir)) {
        throw new Error('Valid directory path is expected.');
      }

      (0, _index.read_directory)(dir).forEach(function (fileName) {
        if (fileName && fileName.includes('.js')) {
          var config = require(dir + _path2.default.sep + fileName)(_this.env),
              configKey = fileName.split('.')[0];

          _this.configs[configKey] = config;
        }
      });

      return this;
    }

    /**
       * Initialize configuration files, save all data from config path into our object (bulked)
       * @param {Array} path directory to search for configuration files
       * @return this
       */

  }, {
    key: 'loadFromFileBulk',
    value: function loadFromFileBulk(paths) {
      var _this2 = this;

      if (paths) {
        if (Array.isArray(paths)) {
          paths.forEach(function (path) {
            return path ? _this2.loadFromFile(path) : false;
          });
        }
      }

      return this;
    }

    /**
       * Check the existence of the configuration
       * @param  {String}  key config key
       * @return {Boolean} key existed?
       */

  }, {
    key: 'has',
    value: function has(key) {
      return this.configs.hasOwnProperty(key);
    }

    /**
       * Return specified configuration
       * @param {String} configName configuration key
       * @return Private.configs[configName]
       */

  }, {
    key: 'get',
    value: function get(configName) {
      return configName ? this.configs[configName] : this.configs;
    }

    /**
       * Set data into our configuration object
       * @param {String} configName configuration key
       * @param {Mixed} value configuration value
       * @return this
       */

  }, {
    key: 'set',
    value: function set(configName, value) {
      this.configs[configName] = value;

      return this;
    }

    /**
       * Return where configuration files are located
       * @return Private.configPath
       */

  }, {
    key: 'getPaths',
    value: function getPaths() {
      return this.configPaths;
    }

    /**
       * Set where configuration files are located
       * @param {String} data location of config files
       * @return this
       */

  }, {
    key: 'pushPath',
    value: function pushPath(path) {
      this.configPaths.push(path);

      this.loadFromFile(path);

      return this;
    }

    /**
       * Our good ol' friend singleton
       * @return self
       */

  }], [{
    key: 'instance',
    value: function instance() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);

  return Config;
}();

exports.default = Config;
//# sourceMappingURL=Config.js.map
