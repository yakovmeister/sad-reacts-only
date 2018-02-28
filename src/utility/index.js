import fs from 'fs-extra'
import path from 'path'

module.exports = {
  /**
	 * Check if key existed from environment variable, otherwise use
	 * the value passed as second argument of this function
	 *
	 * @param {string} key key you are trying to access from env variable
	 * @param {mixed} value alternative value in case key doesn't exist
	 * @return {mixed} either value from env[key] or second argument value
	 */
	env: function env(key, value) {
		process.env[key] = process.env[key] ? process.env[key] : value

		return process.env[key]
  },

	/**
	 * require file but with the option to instantiate it
	 * @param  {[type]}  dir         [description]
	 * @param  {Boolean} instantiate [description]
	 * @return {[type]}              [description]
	 */
  load: function load(path, instantiate = true) {
    if (!module.exports.is_directory(path) && !module.exports.is_file(path)) {
	    throw new Error(`${dir} is not a valid directory/file.`)
    }

	  const loaded = {}

    if(module.exports.is_file(path)) {
      if(path.includes('.js')) {
        let obj = instantiate ? new (require(path)) : require(path)
          , key = module.exports.get_filename(path)
        loaded[key] = obj
      }
    } else {
      let files = module.exports.read_directory(path)
      
      files.forEach(file => {
        if(is_file(path + path.sep + file) && file.includes('.js')) {
            let obj = instantiate ? new (require(path + path.sep + file)) : require(path + path.sep + file),
            key = file.split('.')[0]

            loaded[key] = obj
        }
      })   
    }

    return loaded
  },

	/**
	 * Removes file/directory
	 * @param {String} path path to be removed
	 * @return {Boolean} fs.unlinkSync
	 */
  remove: function remove(path) {
    return fs.unlinkSync(path)
  },

	/**
	 * Change the name of a file/directory
	 * @param {String} target target file or directory
	 * @param {String} new_alias new name for the file or directory
	 * @return fs.renameSync 
	 */
  rename: function rename(target, new_alias) {
    return fs.renameSync(target, new_alias)
  },

	/**
	 * Checks whether the argument given exists as a path
	 * @param {String} dir path to be checked
	 * @return {Boolean} (true/false)
	 */
  exists: function exists(path) {
    return fs.existsSync(path)
  },

	/**
	 * Checks whether the argument given is a valid path
	 * @param {String} dir path to be checked
	 * @return {Boolean} (true/false)
	 */
  is_directory: function is_directory(path) {
    return module.exports.exists(path)
      ? fs.statSync(path).isDirectory()
      : false
  },
  
	/**
	 * Checks whether the argument given is a valid file
	 * @param {String} dir path to be checked
	 * @return {Boolean} (true/false)
	 */
  is_file: function is_directory(path) {
    return module.exports.exists(path)
      ? fs.statSync(path).isFile()
      : false
  },

	/**
	 * Returns the current working directory
	 * @return {String} current working directory
	 */
  base_path: function base_path() {
    return path.resolve(process.cwd())
  },

	/**
	 * Read the given path
	 * @param {String} dir path to be scanned for files
	 * @return fs.readdirSync
	 */
  read_directory: function read_directory(path) {
    return fs.readdirSync(path)
  },

  /**
	 * returns the exact file name without the file extension from given directory
	 * @param  {String} dir path
	 * @return {String} cleaned file name
	 */
  get_filename: function get_filename(path) {
    return path.split(path.sep) [
      path.split(path.sep).length - 1
    ].split('.')[0]
	}
}
