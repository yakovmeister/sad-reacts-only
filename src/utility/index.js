import dotenv from 'dotenv'
import fs from 'fs-extra'
import path from 'path'
import Config from './Config'

const env = () => {
	dotenv.config()

	return (key, value) => {
		process.env[key] = process.env[key] ? process.env[key] : value

		return process.env[key]
	}	
}

const load = (dir, instantiate = true) => {
	if(!is_directory(dir) && !is_file(dir))
	    throw new Error(`${dir} is not a valid directory/file.`)

	const loaded = {}

	if(is_file(dir)) {
	    if(dir.includes('.js')) {
	        let obj = instantiate ? new (require(dir)) : require(dir),
	            key = get_filename(dir)

	        loaded[key] = obj
	    }
	} else {
	    let files = read_directory(dir)
	    
	    files.forEach(file => {
	        if(is_file(dir + path.sep + file) && file.includes('.js')) {
	            let obj = instantiate ? new (require(dir + path.sep + file)) : require(dir + path.sep + file),
	            key = file.split('.')[0]

	            loaded[key] = obj
	        }
	    })   
	}

	return loaded
}

const exists = (dir) => fs.existsSync(dir)

const remove = (path) => fs.unlinkSync(path)

const rename = (target, new_alias) => fs.renameSync(target, new_alias)

const is_file = (dir) => exists(dir) 
	? fs.statSync(dir).isFile() 
	: false

const base_path = () => path.resolve(process.cwd())

const is_directory = (dir) => exists(dir) 
	? fs.statSync(dir).isDirectory() 
	: false

const get_filename = (dir) => dir.split(path.sep)[
		dir.split(path.sep).length - 1
	].split('.')[0]

const read_directory = (dir) => fs.readdirSync(dir)


export {
	/**
	 * Checks whether the argument given exists as a path
	 * @param {String} dir path to be checked
	 * @return {Boolean} (true/false)
	 */
	exists,

	/**
	 * Read the given path
	 * @param {String} dir path to be scanned for files
	 * @return fs.readdirSync
	 */
	read_directory,

	/**
	 * Checks whether the argument given is a valid file
	 * @param {String} dir path to be checked
	 * @return {Boolean} (true/false)
	 */
	is_file,

	/**
	 * Checks whether the argument given is a valid path
	 * @param {String} dir path to be checked
	 * @return {Boolean} (true/false)
	 */
	is_directory,

	/**
	 * returns the exact file name without the file extension from given directory
	 * @param  {String} dir path
	 * @return {String} cleaned file name
	 */
	get_filename,

	/**
	* Check if key existed from environment variable, otherwise use
	* the value passed as second argument of this function
	*
	* @param {string} key key you are trying to access from env variable
	* @param {mixed} value alternative value in case key doesn't exist
	* @return {mixed} either value from env[key] or second argument value
	*/
	env,

	/**
	 * Removes file/directory
	 * @param {String} path path to be removed
	 * @return {Boolean} fs.unlinkSync
	 */
	remove,

	/**
	 * Change the name of a file/directory
	 * @param {String} target target file or directory
	 * @param {String} new_alias new name for the file or directory
	 * @return fs.renameSync 
	 */
	rename,

	/**
	 * Returns the current working directory
	 * @return {String} current working directory
	 */
 	base_path,

	/**
	 * require file but with the option to instantiate it
	 * @param  {[type]}  dir         [description]
	 * @param  {Boolean} instantiate [description]
	 * @return {[type]}              [description]
	 */
	load,

	/**
	 * @see /src/utility/Config
	 */
	Config
}