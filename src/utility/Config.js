import path from 'path'
import { is_directory, read_directory } from './index'

export default class Config {
  constructor(configPath) {
    this.instance = undefined
    this.configs = {}
    this.configPaths = configPath ? (Array.isArray(configPath) ? configPath : [configPath]) : []

    /** initially load from file if there's any */
    this.loadFromFileBulk(this.configPaths)
  }

  /**
   * Initialize configuration files, save all data from config path into our object
   * @param {String} dir directory to search for configuration files
   * @return this
   */
  loadFromFile(dir) {
    if (!is_directory(dir))
      {throw new Error('Valid directory path is expected.')}

    read_directory(dir).forEach(fileName => {
      if (fileName && fileName.includes('.js')) {
        let config = require(dir + path.sep + fileName).default,
          configKey = fileName.split('.')[0]

        this.configs[configKey] = { ...config }
      }
    })

    return this
  }

  /**
   * Initialize configuration files, save all data from config path into our object (bulked)
   * @param {Array} path directory to search for configuration files
   * @return this
   */
  loadFromFileBulk(paths) {
    if (paths) {
      if (Array.isArray(paths))
        {paths.forEach(path => path ? this.loadFromFile(path) : false)}
    }

    return this
  }

  /**
   * Check the existence of the configuration
   * @param  {String}  key config key
   * @return {Boolean} key existed?
   */
  has(key) {
    return this.configs.hasOwnProperty(key)
  }

  /**
   * Return specified configuration
   * @param {String} configName configuration key
   * @return Private.configs[configName]
   */
  get(configName) {
    return configName
      ? this.configs[configName]
      : this.configs
  }

  /**
   * Set data into our configuration object
   * @param {String} configName configuration key
   * @param {Mixed} value configuration value
   * @return this
   */
  set(configName, value) {
    this.configs[configName] = value

    return this
  }

  /**
   * Return where configuration files are located
   * @return Private.configPath
   */
  getPaths() {
    return this.configPaths
  }

  /**
   * Set where configuration files are located
   * @param {String} data location of config files
   * @return this
   */
  pushPath(path) {
    this.configPaths.push(path)

    this.loadFromFile(path)

    return this
  }

  /**
   * Our good ol' friend singleton
   * @return self
   */
  static instance() {
    if (!this.instance)
      {this.instance = new this()}

    return this.instance
  }
}
