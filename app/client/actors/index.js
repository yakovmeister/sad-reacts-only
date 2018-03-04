import {
	APP_IS_LOADING
} from '../types'

export default {
	preloader: function preloader(loaded = false) {
		return {
			type: APP_IS_LOADING,
			payload: loaded
		}
	}
}