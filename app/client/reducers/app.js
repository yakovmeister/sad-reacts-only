
const initialState = {}

export default function appReducer(state = initialState, action) {
	switch(action.type) {
		default:
			console.log(action)
			return { ...state }
	}
}
