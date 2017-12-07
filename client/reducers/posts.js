//  a reducer takes in two things

// 1. the action ( info about what happened )
// 2. copy of the current state


function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
		console.log("Like nambah terus");
		const i = action.index;
		return [
		// before the one we are updating
			...state.slice(0, i), 
			{...state[i], likes: state[i].likes + 1},
			// after the one we are updating
			...state.slice(i + 1)
		]
		// return the updated state
		default:
			return state;
	}
	// console.log("The post will change");
	// console.log(state, action);
	// return state;
}

export default posts;