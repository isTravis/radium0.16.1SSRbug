import Immutable from 'immutable';
import {ensureImmutable} from './';

/*--------*/
// Load Actions
/*--------*/
import {
	TEST_LOAD,
	TEST_SUCCESS,
	TEST_FAIL,
} from '../actions/landing';

/*--------*/
// Initialize Default State 
/*--------*/
export const defaultState = Immutable.Map({});

/*--------*/
// Define reducing functions 
//
// These functions take in an initial state and return a new
// state. They are pure functions. We use Immutable to enforce this. 
/*--------*/
function success(state, result) {
	console.log('In success reducer. Got async server call: ', result);
	return state;
}

function fail(state, result) {
	console.log('In fail ', result);
	return state;
}

/*--------*/
// Bind actions to specific reducing functions.
/*--------*/
export default function landingReducer(state = defaultState, action) {

	switch (action.type) {
	case TEST_LOAD:
		return state;
	case TEST_SUCCESS:
		return success(state, action.result);
	case TEST_FAIL:
		return fail(state, action.error);
	default:
		return ensureImmutable(state);
	}
}
