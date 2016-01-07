/*--------*/
// Define Action types
// 
// All action types are defined as constants. Do not manually pass action 
// types as strings in action creators
/*--------*/
export const TEST_LOAD = 'editor/TEST_LOAD';
export const TEST_SUCCESS = 'editor/TEST_SUCCESS';
export const TEST_FAIL = 'editor/TEST_FAIL';

/*--------*/
// Define Action creators
// 
// All calls to dispatch() call one of these functions. Do not manually create
// action objects (e.g. {type:example, payload:data} ) within dispatch()
// function calls
/*--------*/
export function test() {
	return {
		types: [TEST_LOAD, TEST_SUCCESS, TEST_FAIL],
		promise: (client) => client.get('/test', {params: {}}) 
	};
}
