import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {App, Landing, NotFound} from 'containers';

export default () => {

	return (
		<Route path="/" component={App}>

			{ /* Home (main) route */ }
			<IndexRoute component={Landing}/>

			{ /* Catch all route */ }
			<Route path="*" component={NotFound} status={404} />

		</Route>
	);

};
